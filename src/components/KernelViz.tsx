"use client";

/**
 * Xenova-style agentic kernel optimization visualizer.
 *
 * A live React Flow canvas where a computation graph morphs through a timeline
 * of "passes" — fusions merge nodes, edges rewire, particles stream along the
 * connections, and a metrics panel updates. Inspired by Xenova's Kimi Linear
 * animation: soft layered nodes, neon glow on fusion, flowing particle edges.
 *
 * Based on the react-flow-kernel-viz-tutorial.md spec:
 *  - custom OpNode (pill, glow, fused highlight)
 *  - ParticleEdge (glowing dots travelling along bezier paths)
 *  - GraphState timeline + auto-play player advancing through fusion passes
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Background,
  BackgroundVariant,
  Controls,
  getBezierPath,
  Handle,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type EdgeProps,
  type Node,
  type NodeProps,
  type ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// ─── Custom Node ──────────────────────────────────────────────

type OpNodeData = {
  label: string;
  subtitle?: string;
  fused?: boolean;
  tone?: "teal" | "magenta" | "blue";
};

const TONE: Record<string, { glow: string; border: string; chip: string }> = {
  teal: { glow: "rgba(94,234,212,.45)", border: "rgba(94,234,212,.6)", chip: "#5eead4" },
  magenta: { glow: "rgba(232,121,249,.45)", border: "rgba(232,121,249,.6)", chip: "#e879f9" },
  blue: { glow: "rgba(96,165,250,.45)", border: "rgba(96,165,250,.6)", chip: "#60a5fa" },
};

function OpNode({ data }: NodeProps) {
  const d = data as OpNodeData;
  const t = TONE[d.tone ?? "teal"];
  return (
    <div
      className="kv-node"
      style={{
        boxShadow: d.fused ? `0 0 34px ${t.glow}` : undefined,
        borderColor: d.fused ? t.border : 'rgba(120,140,160,.22)',
      }}
    >
      <span className="kv-node-chip" style={{ background: t.chip }} />
      <div className="kv-node-meta">{d.subtitle ?? "OP"}</div>
      <div className="kv-node-label">{d.label}</div>
      <Handle type="target" position={Position.Left} className="kv-handle" />
      <Handle type="source" position={Position.Right} className="kv-handle" />
    </div>
  );
}

// ─── Particle Edge ────────────────────────────────────────────

function ParticleEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  style,
}: EdgeProps) {
  const [edgePath] = useMemo(
    () =>
      getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
      }),
    [sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition],
  );

  const pid = useMemo(() => `p-${id}`, [id]);

  return (
    <>
      <path
        id={id}
        d={edgePath}
        fill="none"
        stroke="rgba(200,215,235,.28)"
        strokeWidth={1.2}
        style={style}
        markerEnd={markerEnd}
      />
      <path
        id={`${pid}-phantom`}
        d={edgePath}
        fill="none"
        stroke="transparent"
      />
      {[0, 1, 2].map((k) => (
        <circle
          key={k}
          r="3"
          fill="rgba(224,242,254,.9)"
          opacity="0.85"
        >
          <animateMotion
            dur={`${2.2 + k * 0.7}s`}
            begin={`${k * 0.35}s`}
            repeatCount="indefinite"
          >
            <mpath href={`#${pid}-phantom`} />
          </animateMotion>
        </circle>
      ))}
    </>
  );
}

const nodeTypes = { op: OpNode };
const edgeTypes = { particle: ParticleEdge };

// ─── Graph state timeline ─────────────────────────────────────

type GraphState = {
  id: string;
  label: string;
  nodes: Node[];
  edges: Edge[];
  metrics: { throughput: number; dispatches: number; nodeCount: number; fusion: number };
  // Camera target — pan right through the graph as passes advance (flow coords to center on).
  center?: { x: number; y: number; zoom: number };
};

type Op = { id: string; label: string; subtitle?: string; tone?: OpNodeData["tone"]; x: number; y: number; fused?: boolean; parent?: string };

function buildState(ops: Op[]): GraphState["nodes"] {
  return ops.map((o) => ({
    id: o.id,
    type: "op",
    position: { x: o.x, y: o.y },
    data: { label: o.label, subtitle: o.subtitle, fused: o.fused, tone: o.tone } as OpNodeData,
  }));
}
function buildEdges(edges: [string, string][]): Edge[] {
  return edges.map(([s, t], i) => ({ id: `e${i}-${s}-${t}`, source: s, target: t, type: "particle" }));
}

// Pass 1 — decomposed graph (many small ops)
const p1Ops: Op[] = [
  { id: "a", label: "load", subtitle: "input", tone: "teal", x: 40, y: 200 },
  { id: "b", label: "embed", subtitle: "tok", tone: "blue", x: 220, y: 160 },
  { id: "c", label: "rms_norm", subtitle: "norm", tone: "teal", x: 420, y: 210 },
  { id: "d", label: "attn_q", subtitle: "q", tone: "blue", x: 620, y: 150 },
  { id: "e", label: "attn_k", subtitle: "k", tone: "blue", x: 620, y: 260 },
  { id: "f", label: "attn_v", subtitle: "v", tone: "blue", x: 820, y: 200 },
  { id: "g", label: "attn_out", subtitle: "out", tone: "magenta", x: 1020, y: 200 },
  { id: "h", label: "fc_up", subtitle: "mlp", tone: "teal", x: 1220, y: 160 },
  { id: "i", label: "fc_down", subtitle: "mlp", tone: "teal", x: 1400, y: 210 },
  { id: "j", label: "unembed", subtitle: "logits", tone: "magenta", x: 1580, y: 180 },
];

// Pass 2 — rms_norm fused into embed; q/k into attn
const p2Ops: Op[] = [
  { id: "a", label: "load", subtitle: "input", tone: "teal", x: 40, y: 200 },
  { id: "bc", label: "embed+norm", subtitle: "fused", tone: "teal", fused: true, x: 260, y: 180 },
  { id: "d", label: "attn_q", subtitle: "q", tone: "blue", x: 500, y: 150 },
  { id: "eq", label: "attn_qk", subtitle: "fused", tone: "blue", fused: true, x: 500, y: 270 },
  { id: "f", label: "attn_v", subtitle: "v", tone: "blue", x: 760, y: 200 },
  { id: "g", label: "attn_out", subtitle: "out", tone: "magenta", x: 960, y: 200 },
  { id: "h", label: "fc_up", subtitle: "mlp", tone: "teal", x: 1160, y: 160 },
  { id: "i", label: "fc_down", subtitle: "mlp", tone: "teal", x: 1360, y: 210 },
  { id: "j", label: "unembed", subtitle: "logits", tone: "magenta", x: 1580, y: 180 },
];

// Pass 3 — qk+v fused together, fc_up+down fused
const p3Ops: Op[] = [
  { id: "a", label: "load", subtitle: "input", tone: "teal", x: 40, y: 200 },
  { id: "bc", label: "embed+norm", subtitle: "fused", tone: "teal", fused: true, x: 280, y: 190 },
  { id: "qkv", label: "attn_qkv", subtitle: "fused", tone: "blue", fused: true, x: 580, y: 200 },
  { id: "g", label: "attn_out", subtitle: "out", tone: "magenta", x: 880, y: 200 },
  { id: "ghi", label: "mlp_fused", subtitle: "fused", tone: "magenta", fused: true, x: 1180, y: 200 },
  { id: "j", label: "unembed", subtitle: "logits", tone: "magenta", x: 1500, y: 180 },
];

// Pass 4 — final fused kernel
const p4Ops: Op[] = [
  { id: "a", label: "load", subtitle: "input", tone: "teal", x: 60, y: 200 },
  { id: "embed", label: "embed+norm", subtitle: "fused", tone: "teal", fused: true, x: 320, y: 200 },
  { id: "attn", label: "attn_qkv+out", subtitle: "fused", tone: "blue", fused: true, x: 660, y: 200 },
  { id: "mlp", label: "mlp_fused", subtitle: "fused", tone: "magenta", fused: true, x: 1000, y: 200 },
  { id: "j", label: "unembed", subtitle: "logits", tone: "magenta", x: 1360, y: 190 },
];

const timeline: GraphState[] = [
  {
    id: "pass-01",
    label: "PASS 01 · graph construction",
    nodes: buildState(p1Ops),
    edges: buildEdges([["a", "b"], ["b", "c"], ["c", "d"], ["c", "e"], ["c", "f"], ["d", "g"], ["e", "g"], ["f", "g"], ["g", "h"], ["h", "i"], ["i", "j"]]),
    metrics: { throughput: 65, dispatches: 331, nodeCount: 10, fusion: 0 },
    center: { x: 340, y: 250, zoom: 0.8 },
  },
  {
    id: "pass-02",
    label: "PASS 02 · first fusion wave",
    nodes: buildState(p2Ops),
    edges: buildEdges([["a", "bc"], ["bc", "d"], ["bc", "eq"], ["bc", "f"], ["d", "g"], ["eq", "g"], ["f", "g"], ["g", "h"], ["h", "i"], ["i", "j"]]),
    metrics: { throughput: 82.3, dispatches: 190, nodeCount: 9, fusion: 2 },
    center: { x: 540, y: 240, zoom: 0.8 },
  },
  {
    id: "pass-03",
    label: "PASS 03 · attention fusion",
    nodes: buildState(p3Ops),
    edges: buildEdges([["a", "bc"], ["bc", "qkv"], ["qkv", "g"], ["g", "ghi"], ["ghi", "j"]]),
    metrics: { throughput: 91.4, dispatches: 98, nodeCount: 6, fusion: 4 },
    center: { x: 760, y: 230, zoom: 0.8 },
  },
  {
    id: "pass-04",
    label: "PASS 04 · fused kernel",
    nodes: buildState(p4Ops),
    edges: buildEdges([["a", "embed"], ["embed", "attn"], ["attn", "mlp"], ["mlp", "j"]]),
    metrics: { throughput: 97.8, dispatches: 32, nodeCount: 5, fusion: 6 },
    center: { x: 620, y: 230, zoom: 0.9 },
  },
];

// ─── Main component ───────────────────────────────────────────

export default function KernelViz() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(timeline[0].nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(timeline[0].edges);
  const rf = useRef<ReactFlowInstance | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Pan right through the graph as passes advance (smooth camera tracking).
  const applyPass = useCallback((i: number) => {
    const s = timeline[i];
    setNodes(s.nodes);
    setEdges(s.edges);
    const inst = rf.current;
    if (inst && s.center) {
      inst.setCenter(s.center.x, s.center.y, { zoom: s.center.zoom, duration: 1400 });
    }
  }, [setNodes, setEdges]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % timeline.length);
  }, []);

  // When index changes, apply the new pass + pan.
  useEffect(() => {
    applyPass(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    if (!playing) return;
    timer.current = setTimeout(next, 4200);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [playing, next, index]);

  const current = timeline[index];
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="kv-shell">
      <div className="kv-player">
        <button type="button" className="kv-play" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"}>
          {playing ? "❚❚" : "▶"}
        </button>
        {timeline.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`kv-step ${i === index ? "is-active" : ""} ${i < index ? "is-done" : ""}`}
            onClick={() => { setIndex(i); applyPass(i); setPlaying(false); }}
          >
            {i < index ? "✓" : String(i + 1).padStart(2, "0")}
          </button>
        ))}
        <button type="button" className="kv-next" onClick={next} aria-label="Next pass">→</button>
      </div>

      <div className={`kv-canvas ${reduced ? "is-reduced" : ""}`} data-state={current.id}>
        {!reduced && <div className="kv-glow-field" />}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onInit={(inst) => {
            rf.current = inst;
            const c0 = timeline[0].center;
            if (c0) inst.setCenter(c0.x, c0.y, { zoom: c0.zoom, duration: 0 });
          }}
          minZoom={0.3}
          maxZoom={1.6}
          proOptions={{ hideAttribution: true }}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag
          zoomOnScroll
          className="kv-flow"
        >
          <Background variant={BackgroundVariant.Dots} gap={36} size={1.4} color="rgba(150,170,200,.12)" />
          <Controls showInteractive={false} />
        </ReactFlow>

        <div className="kv-label">
          <span className="kv-label-id">{current.id}</span>
          <span className="kv-label-title">{current.label}</span>
        </div>

        <div className="kv-counter">
          <div className="kv-counter-head">SEC/BLOCK</div>
          <div className="kv-counter-body">
            <div><b>{current.metrics.throughput.toFixed(1)}</b><span>throughput %</span></div>
            <div><b>{current.metrics.dispatches}</b><span>dispatches</span></div>
            <div><b>{current.metrics.nodeCount}</b><span>live nodes</span></div>
            <div><b>+{current.metrics.fusion}</b><span>fusions</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
