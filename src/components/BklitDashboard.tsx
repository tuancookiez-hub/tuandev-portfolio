"use client";

/**
 * L4 — inspection data dashboard. One page, multiple panels, every bklit
 * chart type animated: area, bar, line, composed, pie, ring, radar, scatter,
 * funnel, heatmap, gauge, choropleth.
 */

import { useMemo } from "react";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import type { Topology } from "topojson-specification";
import { curveNatural } from "@visx/curve";
import worldTopo from "../data/world-countries.json";
import { AreaChart } from "./charts/area-chart";
import { Area } from "./charts/area";
import { BarChart } from "./charts/bar-chart";
import { Bar } from "./charts/bar";
import { BarXAxis } from "./charts/bar-x-axis";
import { LineChart } from "./charts/line-chart";
import { Line } from "./charts/line";
import { ComposedChart } from "./charts/composed-chart";
import { SeriesBar } from "./charts/series-bar";
import { PieChart } from "./charts/pie-chart";
import { PieSlice } from "./charts/pie-slice";
import { PieCenter } from "./charts/pie-center";
import { RingChart } from "./charts/ring-chart";
import { Ring } from "./charts/ring";
import { RingCenter } from "./charts/ring-center";
import { RadarChart } from "./charts/radar-chart";
import { RadarGrid } from "./charts/radar-grid";
import { RadarAxis } from "./charts/radar-axis";
import { RadarLabels } from "./charts/radar-labels";
import { RadarArea } from "./charts/radar-area";
import { ScatterChart } from "./charts/scatter-chart";
import { Scatter } from "./charts/scatter";
import { FunnelChart } from "./charts/funnel-chart";
import { Gauge } from "./charts/gauge";
import { Grid } from "./charts/grid";
import { XAxis } from "./charts/x-axis";
import { ChartTooltip } from "./charts/tooltip";
import {
  HeatmapCells,
  HeatmapChart,
  HeatmapInteractionBoundary,
  HeatmapInteractionProvider,
  HeatmapLegend,
  HeatmapTooltip,
  HeatmapXAxis,
  HeatmapYAxis,
} from "./charts/heatmap";
import {
  ChoroplethChart,
  ChoroplethFeatureComponent,
  ChoroplethTooltip,
  type ChoroplethFeature,
} from "./charts/choropleth";

// ─── data ────────────────────────────────────────────────────

const months = [
  { name: "Jan", value: 1280 },
  { name: "Feb", value: 1560 },
  { name: "Mar", value: 1100 },
  { name: "Apr", value: 1850 },
  { name: "May", value: 1680 },
  { name: "Jun", value: 2120 },
];

const traffic = [
  { date: new Date(2026, 5, 1), requests: 1860, errors: 12 },
  { date: new Date(2026, 5, 2), requests: 2140, errors: 9 },
  { date: new Date(2026, 5, 3), requests: 1980, errors: 15 },
  { date: new Date(2026, 5, 4), requests: 2420, errors: 7 },
  { date: new Date(2026, 5, 5), requests: 2310, errors: 11 },
  { date: new Date(2026, 5, 6), requests: 2760, errors: 5 },
  { date: new Date(2026, 5, 7), requests: 2540, errors: 8 },
];

const latency = [
  { date: new Date(2026, 5, 1), p50: 182, p95: 232 },
  { date: new Date(2026, 5, 2), p50: 176, p95: 224 },
  { date: new Date(2026, 5, 3), p50: 190, p95: 241 },
  { date: new Date(2026, 5, 4), p50: 168, p95: 218 },
  { date: new Date(2026, 5, 5), p50: 174, p95: 226 },
  { date: new Date(2026, 5, 6), p50: 161, p95: 209 },
  { date: new Date(2026, 5, 7), p50: 155, p95: 201 },
];

const mix = [
  { date: new Date(2026, 5, 1), revenue: 4200, runRate: 3800 },
  { date: new Date(2026, 5, 2), revenue: 5100, runRate: 4600 },
  { date: new Date(2026, 5, 3), revenue: 4800, runRate: 5200 },
  { date: new Date(2026, 5, 4), revenue: 5500, runRate: 5000 },
  { date: new Date(2026, 5, 5), revenue: 6200, runRate: 5700 },
  { date: new Date(2026, 5, 6), revenue: 5800, runRate: 6100 },
  { date: new Date(2026, 5, 7), revenue: 6600, runRate: 6400 },
];

const pieData = [
  { label: "Kimi", value: 320 },
  { label: "DeepSeek", value: 280 },
  { label: "Claude", value: 190 },
  { label: "GPT", value: 140 },
];

const ringData = [
  { label: "Latency", value: 42, maxValue: 100 },
  { label: "Throughput", value: 28, maxValue: 100 },
  { label: "Error", value: 18, maxValue: 100 },
  { label: "Cost", value: 12, maxValue: 100 },
];

const radarMetrics = [
  { key: "speed", label: "Speed" },
  { key: "reliability", label: "Reliability" },
  { key: "comfort", label: "Coverage" },
  { key: "safety", label: "Stability" },
  { key: "efficiency", label: "Efficiency" },
];

const radarData = [
  { label: "Model A", values: { speed: 80, reliability: 70, comfort: 60, safety: 90, efficiency: 75 } },
  { label: "Model B", values: { speed: 55, reliability: 85, comfort: 75, safety: 60, efficiency: 82 } },
];

const scatterData = [
  { date: new Date(2026, 5, 1), sessions: 420, conversions: 28 },
  { date: new Date(2026, 5, 2), sessions: 510, conversions: 34 },
  { date: new Date(2026, 5, 3), sessions: 390, conversions: 22 },
  { date: new Date(2026, 5, 4), sessions: 580, conversions: 41 },
  { date: new Date(2026, 5, 5), sessions: 620, conversions: 38 },
  { date: new Date(2026, 5, 6), sessions: 710, conversions: 52 },
];

const funnelData = [
  { label: "Requests", value: 12000 },
  { label: "Routed", value: 4800 },
  { label: "Processed", value: 2100 },
  { label: "Returned", value: 840 },
];

const heatmapData = [
  { bin: 0, bins: [2, 0, 3, 1, 4, 0, 1].map((count, i) => ({ bin: i, count, date: new Date(2026, 5, 1 + i) })) },
  { bin: 1, bins: [1, 2, 0, 3, 2, 1, 0].map((count, i) => ({ bin: i, count, date: new Date(2026, 5, 8 + i) })) },
  { bin: 2, bins: [0, 1, 4, 2, 1, 3, 2].map((count, i) => ({ bin: i, count, date: new Date(2026, 5, 15 + i) })) },
  { bin: 3, bins: [3, 2, 1, 0, 2, 4, 1].map((count, i) => ({ bin: i, count, date: new Date(2026, 5, 22 + i) })) },
];

const reach: Record<string, number> = {
  "840": 120, "124": 45, "826": 62, "276": 48, "250": 30, "156": 88,
  "392": 55, "410": 22, "702": 40, "458": 25, "356": 38, "36": 35,
};

const REACH_MAX = 120;

function featureColor(feature: ChoroplethFeature): string {
  const v = Number(feature.properties?.value ?? 0);
  if (!v) return "rgba(120,140,160,.18)";
  const t = Math.min(1, v / REACH_MAX);
  return `rgba(20,184,166,${(0.25 + t * 0.75).toFixed(2)})`;
}

function Panel({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <section className="sys-dash-panel">
      <header className="sys-dash-panel-head">
        <span className="sys-dash-panel-title">{title}</span>
        {hint && <span className="sys-dash-panel-hint">{hint}</span>}
      </header>
      {children}
    </section>
  );
}

export default function BklitDashboard() {
  const fc = useMemo(() => {
    const topo = worldTopo as unknown as Topology;
    const coll = feature(
      topo,
      topo.objects.countries as never,
    ) as unknown as FeatureCollection<Geometry, { name?: string; id?: string | number; value?: number }>;
    return {
      ...coll,
      features: coll.features.map((f) => {
        const id = String(f.id ?? f.properties?.id ?? "");
        return {
          ...f,
          properties: {
            ...f.properties,
            id,
            name: f.properties?.name ?? id,
            value: reach[id],
          },
        };
      }),
    } as FeatureCollection<Geometry, { name?: string; id?: string | number; value?: number }>;
  }, []);

  return (
    <div className="bklit-ui sys-dash">
      <Panel title="Traffic" hint="requests · 7d">
        <AreaChart data={traffic} animationDuration={1100}>
          <Grid horizontal />
          <Area dataKey="requests" curve={curveNatural} strokeWidth={2.5} fillOpacity={0.4} />
          <XAxis numTicks={4} />
          <ChartTooltip />
        </AreaChart>
      </Panel>

      <Panel title="Inspections by month" hint="volume">
        <BarChart data={months} xDataKey="name" animationDuration={1100}>
          <Grid horizontal />
          <Bar dataKey="value" fill="var(--chart-line-primary)" lineCap="round" />
          <BarXAxis />
          <ChartTooltip />
        </BarChart>
      </Panel>

      <Panel title="Latency" hint="p50 · p95">
        <LineChart data={latency} animationDuration={1100}>
          <Grid horizontal />
          <Line dataKey="p50" curve={curveNatural} stroke="var(--chart-line-primary)" />
          <Line dataKey="p95" curve={curveNatural} stroke="var(--chart-line-secondary)" />
          <XAxis numTicks={4} />
          <ChartTooltip />
        </LineChart>
      </Panel>

      <Panel title="Composed" hint="revenue + run rate">
        <ComposedChart data={mix} animationDuration={1100}>
          <Grid horizontal />
          <SeriesBar dataKey="revenue" fill="var(--chart-1)" />
          <Area dataKey="runRate" curve={curveNatural} fill="var(--chart-4)" fillOpacity={0.35} />
          <Line dataKey="runRate" curve={curveNatural} stroke="var(--chart-2)" />
          <XAxis numTicks={4} />
          <ChartTooltip />
        </ComposedChart>
      </Panel>

      <Panel title="Provider share" hint="sessions">
        <div className="sys-dash-center">
          <PieChart data={pieData} size={230}>
            {pieData.map((item, i) => (
              <PieSlice index={i} key={item.label} />
            ))}
            <PieCenter defaultLabel="Share" />
          </PieChart>
        </div>
      </Panel>

      <Panel title="Channels" hint="ring">
        <div className="sys-dash-center">
          <RingChart data={ringData} size={230} strokeWidth={14}>
            {ringData.map((item, i) => (
              <Ring index={i} key={item.label} />
            ))}
            <RingCenter defaultLabel="Mix" />
          </RingChart>
        </div>
      </Panel>

      <Panel title="Provider radar" hint="two models">
        <div className="sys-dash-center">
          <RadarChart data={radarData} metrics={radarMetrics} size={280}>
            <RadarGrid />
            <RadarAxis />
            <RadarLabels fontSize={10} offset={16} />
            {radarData.map((row, i) => (
              <RadarArea
                key={row.label}
                index={i}
                color={i === 0 ? "var(--chart-line-primary)" : "var(--chart-line-secondary)"}
              />
            ))}
          </RadarChart>
        </div>
      </Panel>

      <Panel title="Scatter" hint="sessions · conversions">
        <ScatterChart data={scatterData} animationDuration={1100}>
          <Grid horizontal />
          <Scatter dataKey="sessions" />
          <Scatter dataKey="conversions" />
          <XAxis numTicks={4} />
          <ChartTooltip />
        </ScatterChart>
      </Panel>

      <Panel title="Pipeline" hint="funnel">
        <FunnelChart data={funnelData} showValues showLabels />
      </Panel>

      <Panel title="Capacity" hint="gauge">
        <div className="sys-dash-center">
          <Gauge value={87} centerValue={87} totalNotches={40} defaultLabel="Capacity" suffix="%" />
        </div>
      </Panel>

      <Panel title="Activity" hint="heatmap · 4 weeks">
        <HeatmapInteractionProvider>
          <HeatmapInteractionBoundary>
            <div className="sys-dash-heatmap">
              <HeatmapChart data={heatmapData} layout="fluid">
                <HeatmapCells />
                <HeatmapXAxis />
                <HeatmapYAxis />
                <HeatmapTooltip />
              </HeatmapChart>
              <HeatmapLegend />
            </div>
          </HeatmapInteractionBoundary>
        </HeatmapInteractionProvider>
      </Panel>

      <Panel title="Global reach" hint="choropleth · zoom">
        <ChoroplethChart data={fc} aspectRatio="2 / 1" zoomEnabled zoomMin={1} zoomMax={4}>
          <ChoroplethFeatureComponent
            getFeatureColor={featureColor}
            stroke="rgba(10,10,15,.6)"
            strokeWidth={0.5}
          />
          <ChoroplethTooltip
            getFeatureName={(f) => String(f.properties?.name ?? "—")}
            getFeatureValue={(f) => {
              const v = Number(f.properties?.value ?? 0);
              return v || undefined;
            }}
            valueLabel="reach"
          />
        </ChoroplethChart>
      </Panel>
    </div>
  );
}
