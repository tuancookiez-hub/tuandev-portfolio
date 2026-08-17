"use client";

/**
 * L3 — Xenova kernel fusion visualizer.
 * Discrete GraphState passes. Glass nodes. Visible BaseEdge + particles.
 * Fit-view on every pass. Page scroll is never stolen.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Background,
  BackgroundVariant,
  BaseEdge,
  getBezierPath,
  Handle,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type EdgeProps,
  type NodeProps,
  type ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { PASSES, type OpData, type Tone } from "../data/kernelPasses";

const TONE: Record<Tone, { glow: string; border: string; chip: string; wash: string }> = {
  violet: { glow: "rgba(167,139,250,.72)", border: "rgba(167,139,250,.9)", chip: "#c4b5fd", wash: "rgba(91,33,182,.28)" },
  cyan:   { glow: "rgba(34,211,238,.62)",  border: "rgba(34,211,238,.85)", chip: "#67e8f9", wash: "rgba(8,47,73,.34)" },
  teal:   { glow: "rgba(94,234,212,.58)",  border: "rgba(94,234,212,.82)", chip: "#5eead4", wash: "rgba(13,46,48,.34)" },
  blue:   { glow: "rgba(96,165,250,.58)",  border: "rgba(96,165,250,.82)", chip: "#93c5fd", wash: "rgba(15,23,42,.4)" },
};

function OpNode({ data }: NodeProps) {
  const d = data as OpData;
  const t = TONE[d.tone ?? "teal"];
  return (
    <div
      className={`kv-node${d.fused ? " is-fused" : ""}`}
      style={{
        borderColor: d.fused ? t.border : "rgba(186,200,220,.38)",
        boxShadow: d.fused
          ? `0 0 0 1px ${t.border}, 0 0 28px ${t.glow}, inset 0 0 18px ${t.wash}`
          : "inset 0 1px 0 rgba(255,255,255,.06)",
        background: d.fused
          ? `linear-gradient(180deg, ${t.wash}, rgba(8,8,14,.88))`
          : "linear-gradient(180deg, rgba(22,22,32,.92), rgba(8,8,14,.94))",
      }}
    >
      <span className="kv-node-chip" style={{ background: t.chip, boxShadow: d.fused ? `0 0 10px ${t.chip}` : undefined }} />
      <div className="kv-node-copy">
        <div className="kv-node-meta">{d.fused ? "FUSED" : (d.subtitle ?? "OP")}</div>
        <div className="kv-node-label">{d.label}</div>
      </div>
      <Handle type="target" position={Position.Left} className="kv-handle" />
      <Handle type="source" position={Position.Right} className="kv-handle" />
    </div>
  );
}

function ParticleEdge({
  id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition,
}: EdgeProps) {
  const [edgePath] = useMemo(
    () => getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition }),
    [sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition],
  );
  const pid = `kv-edge-${id}`;
  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{ stroke: "#d8b4fe", strokeWidth: 2.6 }}
      />
      <path id={pid} d={edgePath} fill="none" stroke="transparent" />
      {[0, 1].map((k) => (
        <circle key={k} r={k === 0 ? 3.4 : 2.3} fill={k === 0 ? "#f5d0fe" : "#67e8f9"}>
          <animateMotion dur={`${2.4 + k * 0.9}s`} begin={`${k * 0.55}s`} repeatCount="indefinite">
            <mpath href={`#${pid}`} />
          </animateMotion>
        </circle>
      ))}
    </>
  );
}

const nodeTypes = { op: OpNode };
const edgeTypes = { particle: ParticleEdge };

function frame(inst: ReactFlowInstance | null, wide: boolean) {
  if (!inst) return;
  inst.setViewport(wide ? { x: 24, y: 78, zoom: 0.94 } : { x: 10, y: 110, zoom: 0.58 }, { duration: 420 });
}

export default function KernelViz() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const rf = useRef<ReactFlowInstance | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shell = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(PASSES[0].nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(PASSES[0].edges);

  useEffect(() => {
    const el = shell.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setPlaying(true);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const s = PASSES[index];
    setNodes(s.nodes);
    setEdges(s.edges);
    const t = window.setTimeout(() => frame(rf.current, window.innerWidth >= 760), 40);
    return () => window.clearTimeout(t);
  }, [index, setEdges, setNodes]);

  const next = useCallback(() => setIndex((i) => (i + 1) % PASSES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + PASSES.length) % PASSES.length), []);

  useEffect(() => {
    if (!playing) return;
    timer.current = setTimeout(next, 3800);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [playing, next, index]);

  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const current = PASSES[index];

  return (
    <div className="kv-shell" ref={shell}>
      <div className="kv-player">
        <button type="button" className="kv-play" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"}>
          {playing ? "❚❚" : "▶"}
        </button>
        <button type="button" className="kv-next" onClick={prev} aria-label="Previous pass">←</button>
        {PASSES.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className={`kv-step${i === index ? " is-active" : ""}${i < index ? " is-done" : ""}`}
            onClick={() => { setIndex(i); setPlaying(false); }}
          >
            {i < index ? "✓" : String(i + 1).padStart(2, "0")}
          </button>
        ))}
        <button type="button" className="kv-next" onClick={next} aria-label="Next pass">→</button>
      </div>

      <div className={`kv-canvas${reduced ? " is-reduced" : ""}`}>
        {!reduced && <div className="kv-glow-field" />}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          defaultEdgeOptions={{ type: "particle" }}
          onInit={(inst) => {
            rf.current = inst as unknown as ReactFlowInstance;
            frame(inst as unknown as ReactFlowInstance, window.innerWidth >= 760);
          }}
          minZoom={0.45}
          maxZoom={1.2}
          defaultViewport={{ x: 24, y: 78, zoom: 0.94 }}
          proOptions={{ hideAttribution: true }}
          nodesConnectable={false}
          elementsSelectable={false}
          nodesDraggable={false}
          panOnDrag={false}
          panOnScroll={false}
          zoomOnScroll={false}
          zoomOnDoubleClick={false}
          zoomOnPinch={false}
          preventScrolling={false}
          className="kv-flow"
        >
          <Background variant={BackgroundVariant.Dots} gap={26} size={1.15} color="rgba(196,181,253,.22)" />
        </ReactFlow>

        <div className="kv-label">
          <span className="kv-label-id">pass {String(current.pass).padStart(2, "0")} / {String(current.total).padStart(2, "0")}</span>
          <span className="kv-label-title">{current.label}</span>
          <span className="kv-label-stage">{current.stage}</span>
        </div>

        <aside className="kv-metrics" aria-label="Fusion metrics">
          <div className="kv-metric">
            <b>{current.metrics.throughput}</b>
            <span>tok/s</span>
          </div>
          <div className="kv-metric">
            <b>{current.metrics.nodes}</b>
            <span>nodes</span>
          </div>
          <div className="kv-metric">
            <b>{current.metrics.dispatches}</b>
            <span>dispatches</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
