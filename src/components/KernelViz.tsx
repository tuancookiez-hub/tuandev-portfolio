"use client";

/**
 * Kernel optimization visualizer — smooth pan-right through fusion passes.
 *
 * Key technique: ALL nodes from ALL passes always exist in the graph.
 * React Flow's `hidden` property hides/shows nodes per pass without removing
 * them from the tree. This means the viewport NEVER resets — `setCenter`
 * pans smoothly across a stable node layout.
 *
 * Counters interpolate between pass metrics using spring-like easing.
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
        borderColor: d.fused ? t.border : "rgba(120,140,160,.22)",
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

// ─── Master graph (ALL nodes, ALL edges — visibility toggled per pass) ───

// Every node that appears in any pass. Positions are fixed.
const MASTER_NODES: Node[] = [
  // Pass 1 decomposed ops
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
  // Pass 2 fused nodes
  { id: "bc", type: "op", position: { x: 320, y: 185 }, data: { label: "embed+norm", subtitle: "fused", tone: "teal", fused: true } },
  { id: "eq", type: "op", position: { x: 620, y: 240 }, data: { label: "attn_qk", subtitle: "fused", tone: "blue", fused: true } },
  // Pass 3 fused nodes
  { id: "qkv", type: "op", position: { x: 600, y: 200 }, data: { label: "attn_qkv", subtitle: "fused", tone: "blue", fused: true } },
  { id: "ghi", type: "op", position: { x: 1200, y: 200 }, data: { label: "mlp_fused", subtitle: "fused", tone: "magenta", fused: true } },
  // Pass 4 fully fused
  { id: "embed", type: "op", position: { x: 340, y: 200 }, data: { label: "embed+norm", subtitle: "fused", tone: "teal", fused: true } },
  { id: "attn", type: "op", position: { x: 680, y: 200 }, data: { label: "attn_qkv+out", subtitle: "fused", tone: "blue", fused: true } },
  { id: "mlp", type: "op", position: { x: 1020, y: 200 }, data: { label: "mlp_fused", subtitle: "fused", tone: "magenta", fused: true } },
];

// Every possible edge. Visibility toggled per pass.
const MASTER_EDGES: Edge[] = [
  // Pass 1 edges
  { id: "e-ab", source: "a", target: "b", type: "particle" },
  { id: "e-bc", source: "b", target: "c", type: "particle" },
  { id: "e-cd", source: "c", target: "d", type: "particle" },
  { id: "e-ce", source: "c", target: "e", type: "particle" },
  { id: "e-cf", source: "c", target: "f", type: "particle" },
  { id: "e-dg", source: "d", target: "g", type: "particle" },
  { id: "e-eg", source: "e", target: "g", type: "particle" },
  { id: "e-fg", source: "f", target: "g", type: "particle" },
  { id: "e-gh", source: "g", target: "h", type: "particle" },
  { id: "e-hi", source: "h", target: "i", type: "particle" },
  { id: "e-ij", source: "i", target: "j", type: "particle" },
  // Pass 2 edges (bc replaces b+c; eq replaces d+e)
  { id: "e-a-bc", source: "a", target: "bc", type: "particle" },
  { id: "e-bc-d", source: "bc", target: "d", type: "particle" },
  { id: "e-bc-eq", source: "bc", target: "eq", type: "particle" },
  { id: "e-bc-f", source: "bc", target: "f", type: "particle" },
  { id: "e-dg2", source: "d", target: "g", type: "particle" },
  { id: "e-eq-g", source: "eq", target: "g", type: "particle" },
  { id: "e-fg2", source: "f", target: "g", type: "particle" },
  { id: "e-gh2", source: "g", target: "h", type: "particle" },
  { id: "e-hi2", source: "h", target: "i", type: "particle" },
  { id: "e-ij2", source: "i", target: "j", type: "particle" },
  // Pass 3 edges (qkv replaces eq+d+e+f; ghi replaces h+i)
  { id: "e-a-bc3", source: "a", target: "bc", type: "particle" },
  { id: "e-bc-qkv", source: "bc", target: "qkv", type: "particle" },
  { id: "e-qkv-g", source: "qkv", target: "g", type: "particle" },
  { id: "e-g-ghi", source: "g", target: "ghi", type: "particle" },
  { id: "e-ghi-j", source: "ghi", target: "j", type: "particle" },
  // Pass 4 edges (fully fused chain)
  { id: "e-a-embed", source: "a", target: "embed", type: "particle" },
  { id: "e-embed-attn", source: "embed", target: "attn", type: "particle" },
  { id: "e-attn-mlp", source: "attn", target: "mlp", type: "particle" },
  { id: "e-mlp-j2", source: "mlp", target: "j", type: "particle" },
];

// Which nodes/edges are visible per pass (all others hidden)
const PASS_VISIBLE: Record<number, { nodes: Set<string>; edges: Set<string> }> = {
  0: {
    nodes: new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]),
    edges: new Set(["e-ab", "e-bc", "e-cd", "e-ce", "e-cf", "e-dg", "e-eg", "e-fg", "e-gh", "e-hi", "e-ij"]),
  },
  1: {
    nodes: new Set(["a", "bc", "d", "eq", "f", "g", "h", "i", "j"]),
    edges: new Set(["e-a-bc", "e-bc-d", "e-bc-eq", "e-bc-f", "e-dg2", "e-eq-g", "e-fg2", "e-gh2", "e-hi2", "e-ij2"]),
  },
  2: {
    nodes: new Set(["a", "bc", "qkv", "g", "ghi", "j"]),
    edges: new Set(["e-a-bc3", "e-bc-qkv", "e-qkv-g", "e-g-ghi", "e-ghi-j"]),
  },
  3: {
    nodes: new Set(["a", "embed", "attn", "mlp", "j"]),
    edges: new Set(["e-a-embed", "e-embed-attn", "e-attn-mlp", "e-mlp-j2"]),
  },
};

// Camera center targets per pass (flow coords)
const PASS_CENTER = [
  { x: 420, y: 250, zoom: 0.75 },   // pass 1: wide view of decomposed graph
  { x: 560, y: 240, zoom: 0.75 },   // pass 2: drifts right
  { x: 740, y: 230, zoom: 0.75 },   // pass 3: further right
  { x: 680, y: 210, zoom: 0.88 },   // pass 4: zooms in on compact fused kernel
];

// Metrics per pass (interpolated smoothly)
const PASS_METRICS = [
  { throughput: 65, dispatches: 331, nodeCount: 10, fusion: 0 },
  { throughput: 82.3, dispatches: 190, nodeCount: 9, fusion: 2 },
  { throughput: 91.4, dispatches: 98, nodeCount: 6, fusion: 4 },
  { throughput: 97.8, dispatches: 32, nodeCount: 5, fusion: 6 },
];

const PASS_LABELS = [
  "PASS 01 · graph construction",
  "PASS 02 · first fusion wave",
  "PASS 03 · attention fusion",
  "PASS 04 · fused kernel",
];

// ─── Smooth counter component ────────────────────────────────

function AnimatedMetric({ value, decimals = 1, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const target = useRef(value);
  const current = useRef(value);

  useEffect(() => { target.current = value; }, [value]);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const diff = target.current - current.current;
      if (Math.abs(diff) < 0.05) {
        current.current = target.current;
      } else {
        current.current += diff * 0.08; // smooth lerp
      }
      if (ref.current) {
        ref.current.textContent = prefix + current.current.toFixed(decimals) + suffix;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [decimals, prefix, suffix]);

  return <span ref={ref}>{prefix}{value.toFixed(decimals)}{suffix}</span>;
}

// ─── Main component ───────────────────────────────────────────

export default function KernelViz() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const rf = useRef<ReactFlowInstance | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Always-present nodes — smooth opacity fade instead of `hidden` (React Flow removes hidden from DOM)
  const visNodes: Node[] = useMemo(() => {
    const vis = PASS_VISIBLE[index];
    return MASTER_NODES.map((n) => ({
      ...n,
      style: { ...n.style, opacity: vis.nodes.has(n.id) ? 1 : 0 },
      selectable: false,
    }));
  }, [index]);

  const [allNodes, setAllNodes, onNodesChange] = useNodesState(visNodes);
  const [allEdges, setAllEdges, onEdgesChange] = useEdgesState<Edge>([]);

  // Populate edges once on mount
  useEffect(() => {
    setAllEdges(MASTER_EDGES.map((e) => ({ ...e, hidden: true })));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // When pass changes: opacity fade + smooth-setCenter
  useEffect(() => {
    const vis = PASS_VISIBLE[index];
    setAllNodes(MASTER_NODES.map((n) => ({ ...n, style: { ...n.style, opacity: vis.nodes.has(n.id) ? 1 : 0 } })));
    setAllEdges(MASTER_EDGES.map((e) => ({ ...e, animated: vis.edges.has(e.id) })));

    const inst = rf.current;
    const c = PASS_CENTER[index];
    if (inst && c) {
      inst.setCenter(c.x, c.y, { zoom: c.zoom, duration: 1800 });
    }
  }, [index, setAllNodes, setAllEdges]);

  // Auto-advance
  const next = useCallback(() => setIndex((i) => (i + 1) % PASS_CENTER.length), []);
  useEffect(() => {
    if (!playing) return;
    timer.current = setTimeout(next, 4200);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [playing, next, index]);

  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="kv-shell">
      <div className="kv-player">
        <button type="button" className="kv-play" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"}>
          {playing ? "❚❚" : "▶"}
        </button>
        {PASS_LABELS.map((_label, i) => (
          <button
            key={i}
            type="button"
            className={`kv-step ${i === index ? "is-active" : ""} ${i < index ? "is-done" : ""}`}
            onClick={() => { setIndex(i); setPlaying(false); }}
          >
            {i < index ? "✓" : String(i + 1).padStart(2, "0")}
          </button>
        ))}
        <button type="button" className="kv-next" onClick={next} aria-label="Next pass">→</button>
      </div>

      <div className={`kv-canvas ${reduced ? "is-reduced" : ""}`}>
        {!reduced && <div className="kv-glow-field" />}
        <ReactFlow
          nodes={allNodes}
          edges={allEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onInit={(inst) => {
            rf.current = inst as unknown as ReactFlowInstance;
            const c = PASS_CENTER[0];
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
          <span className="kv-label-title">{PASS_LABELS[index]}</span>
        </div>

        <div className="kv-counter">
          <div className="kv-counter-head">SEC/BLOCK</div>
          <div className="kv-counter-body">
            <div><b><AnimatedMetric value={PASS_METRICS[index].throughput} /></b><span>throughput %</span></div>
            <div><b><AnimatedMetric value={PASS_METRICS[index].dispatches} decimals={0} /></b><span>dispatches</span></div>
            <div><b><AnimatedMetric value={PASS_METRICS[index].nodeCount} decimals={0} /></b><span>live nodes</span></div>
            <div><b><AnimatedMetric value={PASS_METRICS[index].fusion} decimals={0} prefix="+" /></b><span>fusions</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
