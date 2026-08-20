"use client";

/**
 * L3 — routing topology. One graph: client → gateway → provider pool.
 * Mirrors the AIClient2API story from L2 in a single React Flow canvas.
 */

import { useMemo } from "react";
import {
  Background,
  BackgroundVariant,
  BaseEdge,
  getBezierPath,
  Handle,
  Position,
  ReactFlow,
  type Edge,
  type EdgeProps,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

type Tone = "client" | "gateway" | "provider" | "degraded";

const TONE: Record<Tone, { chip: string; border: string; glow: string }> = {
  client: { chip: "#14b8a6", border: "rgba(20,184,166,.8)", glow: "rgba(20,184,166,.35)" },
  gateway: { chip: "#67e8f9", border: "rgba(103,232,249,.85)", glow: "rgba(103,232,249,.4)" },
  provider: { chip: "#477da2", border: "rgba(71,125,162,.8)", glow: "rgba(71,125,162,.3)" },
  degraded: { chip: "#c98a12", border: "rgba(201,138,18,.85)", glow: "rgba(201,138,18,.35)" },
};

interface RouteData extends Record<string, unknown> {
  label: string;
  sub: string;
  tone: Tone;
}

function RouteNode({ data }: NodeProps) {
  const d = data as RouteData;
  const t = TONE[d.tone];
  return (
    <div
      className="kv-node"
      style={{
        borderColor: t.border,
        boxShadow: `0 0 0 1px ${t.border}, 0 0 24px ${t.glow}, inset 0 1px 0 rgba(255,255,255,.06)`,
        background: "linear-gradient(180deg, rgba(22,22,32,.92), rgba(8,8,14,.94))",
      }}
    >
      <span className="kv-node-chip" style={{ background: t.chip, boxShadow: `0 0 10px ${t.chip}` }} />
      <div className="kv-node-copy">
        <div className="kv-node-meta">{d.sub}</div>
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
  const pid = `rt-edge-${id}`;
  return (
    <>
      <BaseEdge id={id} path={edgePath} style={{ stroke: "#d8b4fe", strokeWidth: 2.2 }} />
      <path id={pid} d={edgePath} fill="none" stroke="transparent" />
      {[0, 1].map((k) => (
        <circle key={k} r={k === 0 ? 3 : 2.2} fill={k === 0 ? "#f5d0fe" : "#67e8f9"}>
          <animateMotion dur={`${2.6 + k * 1.1}s`} begin={`${k * 0.6}s`} repeatCount="indefinite">
            <mpath href={`#${pid}`} />
          </animateMotion>
        </circle>
      ))}
    </>
  );
}

const nodeTypes = { route: RouteNode };
const edgeTypes = { particle: ParticleEdge };

const NODES: Node<RouteData>[] = [
  { id: "app", type: "route", position: { x: 0, y: 160 }, data: { label: "Client app", sub: "openai-compatible", tone: "client" } },
  { id: "gw", type: "route", position: { x: 240, y: 160 }, data: { label: "Gateway", sub: "AIClient2API", tone: "gateway" } },
  { id: "router", type: "route", position: { x: 480, y: 160 }, data: { label: "Router", sub: "alias + failover", tone: "gateway" } },
  { id: "kimi", type: "route", position: { x: 760, y: 0 }, data: { label: "Kimi k3", sub: "openai-custom", tone: "provider" } },
  { id: "ds", type: "route", position: { x: 760, y: 110 }, data: { label: "DeepSeek", sub: "deepseek-alias", tone: "provider" } },
  { id: "claude", type: "route", position: { x: 760, y: 220 }, data: { label: "Claude", sub: "anthropic-native", tone: "provider" } },
  { id: "gpt", type: "route", position: { x: 760, y: 330 }, data: { label: "GPT", sub: "azure-openai", tone: "degraded" } },
];

const EDGES: Edge[] = [
  { id: "e1", source: "app", target: "gw", type: "particle" },
  { id: "e2", source: "gw", target: "router", type: "particle" },
  { id: "e3", source: "router", target: "kimi", type: "particle" },
  { id: "e4", source: "router", target: "ds", type: "particle" },
  { id: "e5", source: "router", target: "claude", type: "particle" },
  { id: "e6", source: "router", target: "gpt", type: "particle" },
  { id: "e7", source: "gpt", target: "claude", type: "particle" }, // failover
];

export default function RoutingTopology() {
  return (
    <div className="kv-shell" data-single>
      <div className="kv-canvas" style={{ height: "clamp(380px, 54vh, 540px)" }}>
        <div className="kv-glow-field" />
        <ReactFlow
          nodes={NODES}
          edges={EDGES}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          defaultEdgeOptions={{ type: "particle" }}
          defaultViewport={{ x: 10, y: 90, zoom: 0.8 }}
          minZoom={0.45}
          maxZoom={1.2}
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
          <span className="kv-label-id">topology · 01 / 01</span>
          <span className="kv-label-title">Client → gateway → providers</span>
          <span className="kv-label-stage">gpt marked degraded · failover to claude</span>
        </div>

        <aside className="kv-metrics" aria-label="Topology metrics">
          <div className="kv-metric">
            <b>7</b>
            <span>nodes</span>
          </div>
          <div className="kv-metric">
            <b>6</b>
            <span>routes</span>
          </div>
          <div className="kv-metric">
            <b>1</b>
            <span>failover</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
