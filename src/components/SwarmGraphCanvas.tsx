"use client";

/**
 * 3D Force Graph canvas — renders the swarm visualization via react-force-graph-3d.
 * Uses Three.js for custom node/link rendering with bloom/glow.
 * This component is lazy-loaded to avoid SSR issues with WebGL.
 */

import { useRef, useEffect, useMemo } from "react";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

type Node = {
  id: string;
  group: string;
  val: number;
  color: string;
  fx?: number;
  fy?: number;
  fz?: number;
};

type Link = {
  source: string | Node;
  target: string | Node;
  value: number;
  color?: string;
};

type Props = {
  graphData: { nodes: Node[]; links: Link[] };
  clusterLabels: { group: string; x: number; y: number; label: string; color: string }[];
  inView: boolean;
};

export default function SwarmGraphCanvas({ graphData, inView }: Props) {
  const fgRef = useRef<any>(null);

  // Custom node rendering — glowing sphere with bloom-like appearance
  const nodeThreeObject = useMemo(() => {
    return (node: Node) => {
      const group = new THREE.Group();

      // Main sphere
      const geo = new THREE.SphereGeometry(0.6 + node.val * 0.3, 16, 16);
      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
        transparent: true,
        opacity: 0.85,
      });
      const mesh = new THREE.Mesh(geo, mat);
      group.add(mesh);

      // Outer glow (larger transparent sphere)
      const glowGeo = new THREE.SphereGeometry(1.2 + node.val * 0.5, 16, 16);
      const glowMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
        transparent: true,
        opacity: 0.12,
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      group.add(glow);

      return group;
    };
  }, []);

  // Custom link rendering — glowing line with gradient
  const linkThreeObject = useMemo(() => {
    return () => {
      const geometry = new THREE.BufferGeometry();
      const material = new THREE.LineBasicMaterial({
        color: 0xcfe6ff,
        transparent: true,
        opacity: 0.15,
        linewidth: 1,
      });
      return new THREE.Line(geometry, material);
    };
  }, []);

  // Update link positions each frame
  const linkPositionUpdate = useMemo(() => {
    return (_line: any, coords: { start: { x: number; y: number; z: number }; end: { x: number; y: number; z: number } }) => {
      const geo = _line.geometry as THREE.BufferGeometry;
      const pos = new Float32Array([
        coords.start.x, coords.start.y, coords.start.z,
        coords.end.x, coords.end.y, coords.end.z,
      ]);
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    };
  }, []);

  // When graphData changes, reheat the simulation
  useEffect(() => {
    const fg = fgRef.current;
    if (fg) {
      fg.graphData(graphData);
      fg.d3Force("charge")?.strength(-30);
      fg.d3Force("link")?.distance(20);
      fg.d3Force("center")?.strength(0.6);
    }
  }, [graphData]);

  // Camera auto-rotate when in view
  useEffect(() => {
    const fg = fgRef.current;
    if (fg && inView) {
      fg.cameraPosition({ z: 280 });
    }
  }, [inView]);

  if (!inView) return <div className="sg-canvas-placeholder" />;

  return (
    <div className="sg-canvas-wrap">
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        backgroundColor="#0a0a0f"
        showNavInfo={false}
        width={undefined}
        height={undefined}
        nodeThreeObject={nodeThreeObject}
        linkThreeObject={linkThreeObject}
        linkPositionUpdate={linkPositionUpdate}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={1.5}
        linkDirectionalParticleSpeed={0.005}
        linkDirectionalParticleColor={() => "#5eead4"}
        linkOpacity={0.2}
        nodeOpacity={0.9}
        d3VelocityDecay={0.3}
        warmupTicks={20}
        cooldownTicks={100}
        enablePointerInteraction={true}
        enableNavigationControls={true}
      />
    </div>
  );
}
