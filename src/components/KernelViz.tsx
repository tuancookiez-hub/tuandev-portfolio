"use client";

/**
 * Kernel optimization visualizer — Xenova-style fusion pipeline.
 *
 * Simple approach from the tutorial: each pass swaps nodes/edges, camera pans
 * right via setCenter. No crossfades, no hidden-node tricks, no rAF counter loops.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Background, BackgroundVariant, Controls, getBezierPath,
  Handle, Position, ReactFlow, useEdgesState, useNodesState,
  type Edge, type EdgeProps, type Node, type NodeProps,
  type ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// ─── Node ──────────────────────────────────────────────────────

type OpNodeData = {
  label: string;
  subtitle?: string;
  fused?: boolean;
  tone?: "teal" | "magenta" | "blue";
};

const TONE: Record<string, { glow: string; border: string; chip: string }> = {
  teal:    { glow: "rgba(94,234,212,.45)", border: "rgba(94,234,212,.6)",  chip: "#5eead4" },
  magenta: { glow: "rgba(232,121,249,.45)", border: "rgba(232,121,249,.6)", chip: "#e879f9" },
  blue:    { glow: "rgba(96,165,250,.45)", border: "rgba(96,165,250,.6)",   chip: "#60a5fa" },
};

function OpNode({ data }: NodeProps) {
  const d = data as OpNodeData;
  const t = TONE[d.tone ?? "teal"];
  return (
    <div className="kv-node" style={{
      boxShadow: d.fused ? `0 0 34px ${t.glow}` : undefined,
      borderColor: d.fused ? t.border : "rgba(120,140,160,.22)",
    }}>
      <span className="kv-node-chip" style={{ background: t.chip }} />
      <div className="kv-node-meta">{d.subtitle ?? "OP"}</div>
      <div className="kv-node-label">{d.label}</div>
      <Handle type="target" position={Position.Left} className="kv-handle" />
      <Handle type="source" position={Position.Right} className="kv-handle" />
    </div>
  );
}

// ─── Particle Edge ─────────────────────────────────────────────

function ParticleEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style, markerEnd }: EdgeProps) {
  const [edgePath] = useMemo(
    () => getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition }),
    [sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition],
  );
  const pid = useMemo(() => `p-${id}`, [id]);
  return (
    <>
      <path id={id} d={edgePath} fill="none" stroke="rgba(200,215,235,.28)" strokeWidth={1.2} style={style} markerEnd={markerEnd} />
      <path id={`${pid}-phantom`} d={edgePath} fill="none" stroke="transparent" />
      {[0, 1, 2].map((k) => (
        <circle key={k} r="3" fill="rgba(224,242,254,.9)" opacity="0.85">
          <animateMotion dur={`${2.2 + k * 0.7}s`} begin={`${k * 0.35}s`} repeatCount="indefinite">
            <mpath href={`#${pid}-phantom`} />
          </animateMotion>
        </circle>
      ))}
    </>
  );
}

const nodeTypes = { op: OpNode };
const edgeTypes = { particle: ParticleEdge };

// ─── Timeline ──────────────────────────────────────────────────

type GS = {
  id: string; label: string;
  nodes: Node[]; edges: Edge[];
  metrics: { throughput: number; dispatches: number; nodeCount: number; fusion: number };
  center: { x: number; y: number; zoom: number };
};

const timeline: GS[] = [
  {
    id: "pass-01", label: "PASS 01 · graph construction",
    nodes: [
      { id: "a", type: "op", position: { x: 40, y: 200 }, data: { label: "load", subtitle: "input", tone: "teal" } },
      { id: "b", type: "op", position: { x: 220, y: 155 }, data: { label: "embed", subtitle: "tok", tone: "blue" } },
      { id: "c", type: "op", position: { x: 400, y: 210 }, data: { label: "rms_norm", subtitle: "norm", tone: "teal" } },
      { id: "d", type: "op", position: { x: 580, y: 150 }, data: { label: "attn_q", subtitle: "q", tone: "blue" } },
      { id: "e", type: "op", position: { x: 580, y: 270 }, data: { label: "attn_k", subtitle: "k", tone: "blue" } },
      { id: "f", type: "op", position: { x: 760, y: 200 }, data: { label: "attn_v", subtitle: "v", tone: "blue" } },
      { id: "g", type: "op", position: { x: 960, y: 200 }, data: { label: "attn_out", subtitle: "out", tone: "magenta" } },
      { id: "h", type: "op", position: { x: 1160, y: 160 }, data: { label: "fc_up", subtitle: "mlp", tone: "teal" } },
      { id: "i", type: "op", position: { x: 1360, y: 210 }, data: { label: "fc_down", subtitle: "mlp", tone: "teal" } },
      { id: "j", type: "op", position: { x: 1580, y: 185 }, data: { label: "unembed", subtitle: "logits", tone: "magenta" } },
    ],
    edges: [
      { id: "e1", source: "a", target: "b", type: "particle" },
      { id: "e2", source: "b", target: "c", type: "particle" },
      { id: "e3", source: "c", target: "d", type: "particle" },
      { id: "e4", source: "c", target: "e", type: "particle" },
      { id: "e5", source: "c", target: "f", type: "particle" },
      { id: "e6", source: "d", target: "g", type: "particle" },
      { id: "e7", source: "e", target: "g", type: "particle" },
      { id: "e8", source: "f", target: "g", type: "particle" },
      { id: "e9", source: "g", target: "h", type: "particle" },
      { id: "e10", source: "h", target: "i", type: "particle" },
      { id: "e11", source: "i", target: "j", type: "particle" },
    ],
    metrics: { throughput: 65, dispatches: 331, nodeCount: 10, fusion: 0 },
    center: { x: 420, y: 220, zoom: 0.75 },
  },
  {
    id: "pass-02", label: "PASS 02 · first fusion wave",
    nodes: [
      { id: "a", type: "op", position: { x: 40, y: 200 }, data: { label: "load", subtitle: "input", tone: "teal" } },
      { id: "bc", type: "op", position: { x: 320, y: 185 }, data: { label: "embed+norm", subtitle: "fused", tone: "teal", fused: true } },
      { id: "d", type: "op", position: { x: 580, y: 150 }, data: { label: "attn_q", subtitle: "q", tone: "blue" } },
      { id: "eq", type: "op", position: { x: 620, y: 240 }, data: { label: "attn_qk", subtitle: "fused", tone: "blue", fused: true } },
      { id: "f", type: "op", position: { x: 760, y: 200 }, data: { label: "attn_v", subtitle: "v", tone: "blue" } },
      { id: "g", type: "op", position: { x: 960, y: 200 }, data: { label: "attn_out", subtitle: "out", tone: "magenta" } },
      { id: "h", type: "op", position: { x: 1160, y: 160 }, data: { label: "fc_up", subtitle: "mlp", tone: "teal" } },
      { id: "i", type: "op", position: { x: 1360, y: 210 }, data: { label: "fc_down", subtitle: "mlp", tone: "teal" } },
      { id: "j", type: "op", position: { x: 1580, y: 185 }, data: { label: "unembed", subtitle: "logits", tone: "magenta" } },
    ],
    edges: [
      { id: "e1", source: "a", target: "bc", type: "particle" },
      { id: "e2", source: "bc", target: "d", type: "particle" },
      { id: "e3", source: "bc", target: "eq", type: "particle" },
      { id: "e4", source: "bc", target: "f", type: "particle" },
      { id: "e5", source: "d", target: "g", type: "particle" },
      { id: "e6", source: "eq", target: "g", type: "particle" },
      { id: "e7", source: "f", target: "g", type: "particle" },
      { id: "e8", source: "g", target: "h", type: "particle" },
      { id: "e9", source: "h", target: "i", type: "particle" },
      { id: "e10", source: "i", target: "j", type: "particle" },
    ],
    metrics: { throughput: 82.3, dispatches: 190, nodeCount: 9, fusion: 2 },
    center: { x: 560, y: 210, zoom: 0.75 },
  },
  {
    id: "pass-03", label: "PASS 03 · attention fusion",
    nodes: [
      { id: "a", type: "op", position: { x: 40, y: 200 }, data: { label: "load", subtitle: "input", tone: "teal" } },
      { id: "bc", type: "op", position: { x: 280, y: 190 }, data: { label: "embed+norm", subtitle: "fused", tone: "teal", fused: true } },
      { id: "qkv", type: "op", position: { x: 580, y: 200 }, data: { label: "attn_qkv", subtitle: "fused", tone: "blue", fused: true } },
      { id: "g", type: "op", position: { x: 880, y: 200 }, data: { label: "attn_out", subtitle: "out", tone: "magenta" } },
      { id: "ghi", type: "op", position: { x: 1180, y: 200 }, data: { label: "mlp_fused", subtitle: "fused", tone: "magenta", fused: true } },
      { id: "j", type: "op", position: { x: 1500, y: 180 }, data: { label: "unembed", subtitle: "logits", tone: "magenta" } },
    ],
    edges: [
      { id: "e1", source: "a", target: "bc", type: "particle" },
      { id: "e2", source: "bc", target: "qkv", type: "particle" },
      { id: "e3", source: "qkv", target: "g", type: "particle" },
      { id: "e4", source: "g", target: "ghi", type: "particle" },
      { id: "e5", source: "ghi", target: "j", type: "particle" },
    ],
    metrics: { throughput: 91.4, dispatches: 98, nodeCount: 6, fusion: 4 },
    center: { x: 760, y: 210, zoom: 0.75 },
  },
  {
    id: "pass-04", label: "PASS 04 · fused kernel",
    nodes: [
      { id: "a", type: "op", position: { x: 60, y: 200 }, data: { label: "load", subtitle: "input", tone: "teal" } },
      { id: "embed", type: "op", position: { x: 340, y: 200 }, data: { label: "embed+norm", subtitle: "fused", tone: "teal", fused: true } },
      { id: "attn", type: "op", position: { x: 680, y: 200 }, data: { label: "attn_qkv+out", subtitle: "fused", tone: "blue", fused: true } },
      { id: "mlp", type: "op", position: { x: 1020, y: 200 }, data: { label: "mlp_fused", subtitle: "fused", tone: "magenta", fused: true } },
      { id: "j", type: "op", position: { x: 1360, y: 190 }, data: { label: "unembed", subtitle: "logits", tone: "magenta" } },
    ],
    edges: [
      { id: "e1", source: "a", target: "embed", type: "particle" },
      { id: "e2", source: "embed", target: "attn", type: "particle" },
      { id: "e3", source: "attn", target: "mlp", type: "particle" },
      { id: "e4", source: "mlp", target: "j", type: "particle" },
    ],
    metrics: { throughput: 97.8, dispatches: 32, nodeCount: 5, fusion: 6 },
    center: { x: 620, y: 210, zoom: 0.9 },
  },
];

// ─── Counter — simple text swap, no rAF loops ────────────────

function Metric({ value, decimals = 1, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) {
  return <span>{prefix}{value.toFixed(decimals)}{suffix}</span>;
}

// ─── Main ──────────────────────────────────────────────────────

export default function KernelViz() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const rf = useRef<ReactFlowInstance | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(timeline[0].nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(timeline[0].edges);

  // Swap nodes/edges when index changes
  useEffect(() => {
    const s = timeline[index];
    setNodes(s.nodes);
    setEdges(s.edges);
    const inst = rf.current;
    if (inst) {
      inst.setCenter(s.center.x, s.center.y, { zoom: s.center.zoom, duration: 1800 });
    }
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  const next = useCallback(() => setIndex((i) => (i + 1) % timeline.length), []);

  useEffect(() => {
    if (!playing) return;
    timer.current = setTimeout(next, 4500);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [playing, next, index]);

  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const current = timeline[index];

  return (
    <div className="kv-shell">
      <div className="kv-player">
        <button type="button" className="kv-play" onClick={() => setPlaying((p) => !p)}>
          {playing ? "❚❚" : "▶"}
        </button>
        {timeline.map((_, i) => (
          <button key={i} type="button"
            className={`kv-step ${i === index ? "is-active" : ""} ${i < index ? "is-done" : ""}`}
            onClick={() => { setIndex(i); setPlaying(false); }}>
            {i < index ? "✓" : String(i + 1).padStart(2, "0")}
          </button>
        ))}
        <button type="button" className="kv-next" onClick={next}>→</button>
      </div>

      <div className={`kv-canvas ${reduced ? "is-reduced" : ""}`}>
        {!reduced && <div className="kv-glow-field" />}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onInit={(inst) => {
            rf.current = inst as unknown as ReactFlowInstance;
            const c = timeline[0].center;
            inst.setCenter(c.x, c.y, { zoom: c.zoom, duration: 0 });
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
          <span className="kv-label-id">pass {String(index + 1).padStart(2, "0")}</span>
          <span className="kv-label-title">{current.label}</span>
        </div>

        <div className="kv-counter">
          <div className="kv-counter-head">SEC/BLOCK</div>
          <div className="kv-counter-body">
            <div><b><Metric value={current.metrics.throughput} /></b><span>throughput %</span></div>
            <div><b><Metric value={current.metrics.dispatches} decimals={0} /></b><span>dispatches</span></div>
            <div><b><Metric value={current.metrics.nodeCount} decimals={0} /></b><span>live nodes</span></div>
            <div><b><Metric value={current.metrics.fusion} decimals={0} prefix="+" /></b><span>fusions</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
