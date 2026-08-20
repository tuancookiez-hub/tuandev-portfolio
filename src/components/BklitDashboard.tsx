"use client";

/**
 * L4 — live operations dashboard. A real-world BI surface (KPIs, traffic,
 * funnel, health, geography, service health, incidents) where every figure
 * is animated, and a mock-live ticker streams new data every couple seconds
 * so the page feels like it is running against a real system.
 */

import { useEffect, useMemo, useState } from "react";
import NumberFlow from "@number-flow/react";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import type { Topology } from "topojson-specification";
import { curveNatural } from "@visx/curve";
import worldTopo from "../data/world-countries.json";
import { AreaChart } from "./charts/area-chart";
import { Area } from "./charts/area";
import { BarChart } from "./charts/bar-chart";
import { Bar } from "./charts/bar";
import { BarYAxis } from "./charts/bar-y-axis";
import { LineChart } from "./charts/line-chart";
import { Line } from "./charts/line";
import { ComposedChart } from "./charts/composed-chart";
import { SeriesBar } from "./charts/series-bar";
import { LiveLineChart, type LiveLinePoint } from "./charts/live-line-chart";
import { LiveLine } from "./charts/live-line";
import { LiveXAxis } from "./charts/live-x-axis";
import { LiveYAxis } from "./charts/live-y-axis";
import { CandlestickChart } from "./charts/candlestick-chart";
import { Candlestick } from "./charts/candlestick";
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
import { type ChartStatFlowFormat } from "./charts/chart-stat-flow";
import { Grid } from "./charts/grid";
import { XAxis } from "./charts/x-axis";
import { YAxis } from "./charts/y-axis";
import { ChartTooltip } from "./charts/tooltip";
import { SankeyChart } from "./charts/sankey/sankey-chart";
import { SankeyLink } from "./charts/sankey/sankey-link";
import { SankeyNode } from "./charts/sankey/sankey-node";
import { SankeyTooltip } from "./charts/sankey/sankey-tooltip";
import {
  ChoroplethChart,
  ChoroplethFeatureComponent,
  ChoroplethTooltip,
  type ChoroplethFeature,
} from "./charts/choropleth";

// ─── live ticker ─────────────────────────────────────────────

interface Kpis {
  revenue: number;
  users: number;
  sessions: number;
  conversion: number;
  latency: number;
  errorRate: number;
  uptime: number;
}

interface LiveState {
  kpis: Kpis;
  requests: LiveLinePoint[];
  requestValue: number;
  activity: string[];
  started: number;
}

const ACTIVITY_POOL = [
  "Deploy completed · api-v2.31",
  "Cache warmed · edge kl-2",
  "Model router failover → deepseek",
  "Cron batch finished · 430 jobs",
  "Auth token refresh · 0 errors",
  "Backup snapshot · rds-7",
  "Scaling event · +2 workers",
  "SSL rotation · no downtime",
];

function makeInitial(): LiveState {
  const now = Date.now();
  return {
    kpis: {
      revenue: 1_420_000,
      users: 42_890,
      sessions: 128_990,
      conversion: 3.62,
      latency: 342,
      errorRate: 0.28,
      uptime: 99.92,
    },
    requests: Array.from({ length: 40 }, (_, i) => {
      const mins = (40 - i) * 30;
      return {
        time: now - mins * 1000,
        value: Math.round(3200 + Math.sin(i / 5) * 1400 + (i % 7) * 180),
      };
    }),
    requestValue: 3_100,
    activity: [
      "Elevated error rate detected · checkout",
      "High latency alert resolved · search",
      "Deploy completed · api-v2.30",
    ],
    started: now,
  };
}

function tick(s: LiveState): LiveState {
  const k = s.kpis;
  return {
    kpis: {
      revenue: k.revenue + (Math.random() - 0.48) * 9000,
      users: k.users + (Math.random() - 0.45) * 140,
      sessions: k.sessions + (Math.random() - 0.45) * 320,
      conversion: Math.max(3.4, Math.min(3.85, k.conversion + (Math.random() - 0.5) * 0.05)),
      latency: Math.max(318, Math.min(372, k.latency + (Math.random() - 0.5) * 10)),
      errorRate: Math.max(0.2, Math.min(0.4, k.errorRate + (Math.random() - 0.5) * 0.03)),
      uptime: Math.max(99.85, Math.min(99.98, k.uptime + (Math.random() - 0.5) * 0.008)),
    },
    requests: [...s.requests.slice(-59), { time: Date.now(), value: Math.round(Math.max(1600, s.requestValue + (Math.random() - 0.5) * 420)) }],
    requestValue: Math.max(1600, s.requestValue + (Math.random() - 0.5) * 420),
    activity:
      Math.random() < 0.4
        ? [ACTIVITY_POOL[Math.floor(Math.random() * ACTIVITY_POOL.length)], ...s.activity].slice(0, 6)
        : s.activity,
    started: s.started,
  };
}

function useLive(intervalMs = 2000) {
  const [state, setState] = useState<LiveState>(makeInitial);
  useEffect(() => {
    const id = setInterval(() => setState((s) => tick(s)), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return state;
}

// ─── static reference data (for non-streaming panels) ────────

const usersTrend = [
  { date: new Date(2026, 5, 1), value: 37200 },
  { date: new Date(2026, 5, 2), value: 39100 },
  { date: new Date(2026, 5, 3), value: 40850 },
  { date: new Date(2026, 5, 4), value: 39920 },
  { date: new Date(2026, 5, 5), value: 41640 },
  { date: new Date(2026, 5, 6), value: 42510 },
  { date: new Date(2026, 5, 7), value: 42890 },
];

const webLatency = [
  { date: new Date(2026, 5, 1), p50: 210, p95: 342 },
  { date: new Date(2026, 5, 2), p50: 205, p95: 330 },
  { date: new Date(2026, 5, 3), p50: 232, p95: 388 },
  { date: new Date(2026, 5, 4), p50: 248, p95: 371 },
  { date: new Date(2026, 5, 5), p50: 218, p95: 335 },
  { date: new Date(2026, 5, 6), p50: 209, p95: 328 },
  { date: new Date(2026, 5, 7), p50: 203, p95: 322 },
];

const revRun = [
  { date: new Date(2026, 5, 1), revenue: 148000, runRate: 142000 },
  { date: new Date(2026, 5, 2), revenue: 162000, runRate: 151000 },
  { date: new Date(2026, 5, 3), revenue: 139000, runRate: 158000 },
  { date: new Date(2026, 5, 4), revenue: 176000, runRate: 165000 },
  { date: new Date(2026, 5, 5), revenue: 171000, runRate: 170000 },
  { date: new Date(2026, 5, 6), revenue: 189000, runRate: 178000 },
  { date: new Date(2026, 5, 7), revenue: 196000, runRate: 187000 },
];

const topPages = [
  { name: "/home", value: 1_240_000 },
  { name: "/pricing", value: 876_000 },
  { name: "/dashboard", value: 642_000 },
  { name: "/features", value: 512_000 },
  { name: "/docs", value: 381_000 },
];

const funnelData = [
  { label: "Visitors", value: 320980 },
  { label: "Signups", value: 42890 },
  { label: "Activated", value: 18230 },
  { label: "Trial → Paid", value: 5820 },
];

const channelMix = [
  { label: "Organic", value: 38.6, maxValue: 100 },
  { label: "Direct", value: 23.4, maxValue: 100 },
  { label: "Paid", value: 18.1, maxValue: 100 },
  { label: "Referral", value: 12.4, maxValue: 100 },
  { label: "Social", value: 7.5, maxValue: 100 },
];

const sourceShare = [
  { label: "Google", value: 46.3 },
  { label: "Bing", value: 16.4 },
  { label: "Direct", value: 15.2 },
  { label: "Other", value: 22.1 },
];

const qualityMetrics = [
  { key: "reliability", label: "Reliability" },
  { key: "performance", label: "Performance" },
  { key: "security", label: "Security" },
  { key: "usability", label: "Usability" },
  { key: "support", label: "Support" },
];

const qualityData = [
  { label: "Score", values: { reliability: 85, performance: 78, security: 90, usability: 82, support: 75 } },
];

const serviceScatter = [
  { date: new Date(2026, 5, 1), latency: 220, errors: 0.12 },
  { date: new Date(2026, 5, 2), latency: 340, errors: 0.31 },
  { date: new Date(2026, 5, 3), latency: 410, errors: 0.48 },
  { date: new Date(2026, 5, 4), latency: 260, errors: 0.18 },
  { date: new Date(2026, 5, 5), latency: 480, errors: 0.52 },
  { date: new Date(2026, 5, 6), latency: 300, errors: 0.22 },
  { date: new Date(2026, 5, 7), latency: 380, errors: 0.4 },
];

const ohlc = [
  { date: new Date(2026, 4, 25), open: 90, high: 118, low: 86, close: 110 },
  { date: new Date(2026, 4, 28), open: 110, high: 130, low: 104, close: 121 },
  { date: new Date(2026, 5, 1), open: 121, high: 142, low: 118, close: 137 },
  { date: new Date(2026, 5, 4), open: 137, high: 156, low: 132, close: 148 },
  { date: new Date(2026, 5, 6), open: 148, high: 164, low: 142, close: 156 },
  { date: new Date(2026, 5, 8), open: 156, high: 132, low: 126, close: 129 },
  { date: new Date(2026, 5, 10), open: 126, high: 144, low: 122, close: 141 },
];

const sankeyData = {
  nodes: [
    { name: "Organic" },
    { name: "Paid" },
    { name: "Direct" },
    { name: "Acquisition" },
    { name: "Activation" },
    { name: "Purchase" },
  ],
  links: [
    { source: 0, target: 3, value: 48 },
    { source: 1, target: 3, value: 22 },
    { source: 2, target: 3, value: 30 },
    { source: 3, target: 4, value: 64 },
    { source: 4, target: 5, value: 22 },
  ],
};

const countries: Record<string, number> = {
  "840": 34000, "124": 9200, "826": 11800, "276": 7600, "250": 4100, "156": 9800,
  "392": 6200, "410": 2900, "702": 5100, "458": 6100, "356": 8400, "36": 7300,
  "76": 1800, "32": 1100, "484": 2600, "724": 1300, "246": 900, "188": 1500,
};

const INCIDENTS = [
  { sev: "High", title: "Elevated error rate in Checkout Service", status: "Investigating" },
  { sev: "Medium", title: "Search latency above threshold", status: "Identified" },
  { sev: "Low", title: "Increased 5xx from Payments API", status: "Monitoring" },
];

function featureColor(f: ChoroplethFeature): string {
  const v = Number(f.properties?.value ?? 0);
  if (!v) return "rgba(120,140,160,.18)";
  const t = Math.min(1, v / 34000);
  return `rgba(20,184,166,${(0.2 + t * 0.8).toFixed(2)})`;
}

// ─── KPI tile ────────────────────────────────────────────────

function Kpi({
  label, value, delta, down, format, suffix,
}: {
  label: string;
  value: number;
  delta?: string;
  down?: boolean;
  format?: ChartStatFlowFormat;
  suffix?: string;
}) {
  const up = !down;
  return (
    <div className="sys-live-kpi">
      <span className="sys-live-kpi-label">{label}</span>
      <NumberFlow
        className="sys-live-kpi-value"
        value={value}
        format={format}
        suffix={suffix ? ` ${suffix}` : undefined}
        respectMotionPreference={false}
      />
      <span className={`sys-live-kpi-delta ${up ? "up" : "down"}`}>
        {delta && `${up ? "▲" : "▼"} ${delta}`}
      </span>
    </div>
  );
}

function Panel({ title, hint, live, children }: { title: string; hint?: string; live?: boolean; children: React.ReactNode }) {
  return (
    <section className="sys-dash-panel">
      <header className="sys-dash-panel-head">
        <span className="sys-dash-panel-title">
          {title}
          {live && <i className="sys-live-dot" />}
        </span>
        {hint && <span className="sys-dash-panel-hint">{hint}</span>}
      </header>
      {children}
    </section>
  );
}

export default function BklitDashboard() {
  const live = useLive();
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
          properties: { ...f.properties, id, name: f.properties?.name ?? id, value: countries[id] },
        };
      }),
    } as FeatureCollection<Geometry, { name?: string; id?: string | number; value?: number }>;
  }, []);

  const now = Date.now();
  const elapsed = Math.floor((now - live.started) / 1000);
  const rel = (alpha: number) => {
    const s = Math.max(2, elapsed % 900 + alpha);
    return s < 60 ? `${s}m` : `${Math.floor(s / 60)}h ${s % 60}m`;
  };

  return (
    <div className="bklit-ui sys-dash">
      {/* KPI row */}
      <div className="sys-live-kpis">
        <Kpi label="Revenue" value={live.kpis.revenue} delta="12.5%" down
          format={{ style: "currency", currency: "USD", maximumFractionDigits: 0 }} />
        <Kpi label="Active users" value={live.kpis.users} delta="7.2%"
          format={{ maximumFractionDigits: 0 }} />
        <Kpi label="Sessions" value={live.kpis.sessions} delta="9.1%"
          format={{ maximumFractionDigits: 0 }} />
        <Kpi label="Conversion" value={live.kpis.conversion} delta="10.4%" suffix="%"
          format={{ maximumFractionDigits: 2 }} />
        <Kpi label="p95 latency" value={live.kpis.latency} delta="18 ms" suffix="ms"
          format={{ maximumFractionDigits: 0 }} />
        <Kpi label="Error rate" value={live.kpis.errorRate} delta="0.08 pp" suffix="%"
          format={{ maximumFractionDigits: 2 }} />
        <Kpi label="Uptime 30d" value={live.kpis.uptime} delta="0.04 pp" suffix="%"
          format={{ maximumFractionDigits: 2 }} />
      </div>

      {/* row 1 — time series */}
      <Panel title="Active users" hint="7d">
        <AreaChart data={usersTrend}>
          <Grid horizontal />
          <Area dataKey="value" curve={curveNatural} strokeWidth={2.5} fillOpacity={0.4} />
          <XAxis numTicks={4} />
          <ChartTooltip />
        </AreaChart>
      </Panel>

      <Panel title="API requests / min" hint="live" live>
        <LiveLineChart data={live.requests} value={live.requestValue} window={30}>
          <Grid horizontal />
          <LiveLine dataKey="value" curve={curveNatural} stroke="var(--chart-line-primary)" strokeWidth={2.5} />
          <LiveXAxis />
          <LiveYAxis />
          <ChartTooltip />
        </LiveLineChart>
      </Panel>

      <Panel title="Latency · web" hint="p50 · p95">
        <LineChart data={webLatency}>
          <Grid horizontal />
          <Line dataKey="p50" curve={curveNatural} stroke="var(--chart-line-primary)" />
          <Line dataKey="p95" curve={curveNatural} stroke="var(--chart-line-secondary)" />
          <XAxis numTicks={4} />
          <ChartTooltip />
        </LineChart>
      </Panel>

      <Panel title="Revenue & run rate" hint="30d">
        <ComposedChart data={revRun}>
          <Grid horizontal />
          <SeriesBar dataKey="revenue" fill="var(--chart-1)" />
          <Area dataKey="runRate" curve={curveNatural} fill="var(--chart-4)" fillOpacity={0.35} />
          <Line dataKey="runRate" curve={curveNatural} stroke="var(--chart-2)" />
          <XAxis numTicks={4} />
          <ChartTooltip />
        </ComposedChart>
      </Panel>

      <Panel title="Revenue volatility" hint="candlestick">
        <CandlestickChart data={ohlc}>
          <Grid horizontal vertical />
          <Candlestick />
          <XAxis numTicks={4} />
          <YAxis />
          <ChartTooltip />
        </CandlestickChart>
      </Panel>

      <Panel title="Recent activity" hint="live" live>
        <ul className="sys-live-feed">
          {live.activity.map((a, i) => (
            <li key={`${a}-${i}`}>
              <span className="sys-live-feed-dot" />
              <span className="sys-live-feed-text">{a}</span>
              <span className="sys-live-feed-time">{i === 0 ? "just now" : `${rel(i * 43)} ago`}</span>
            </li>
          ))}
        </ul>
      </Panel>

      {/* row 2 — breakdowns */}
      <Panel title="Top pages" hint="page views">
        <BarChart data={topPages} xDataKey="name" orientation="horizontal" animationDuration={1100}>
          <Grid vertical />
          <Bar dataKey="value" fill="var(--chart-line-primary)" lineCap="round" />
          <BarYAxis maxLabels={5} />
          <ChartTooltip />
        </BarChart>
      </Panel>

      <Panel title="Conversion funnel" hint="visitors → paid">
        <FunnelChart data={funnelData} showValues showLabels />
      </Panel>

      <Panel title="System health" hint="gauge">
        <div className="sys-dash-center">
          <Gauge value={92} centerValue={92} totalNotches={40} defaultLabel="Healthy" suffix="%" />
        </div>
      </Panel>

      <Panel title="Channel mix" hint="ring">
        <div className="sys-dash-center">
          <RingChart data={channelMix} size={240} strokeWidth={16}>
            {channelMix.map((c, i) => (
              <Ring index={i} key={c.label} />
            ))}
            <RingCenter defaultLabel="Channel mix" />
          </RingChart>
        </div>
      </Panel>

      <Panel title="Traffic source" hint="pie">
        <div className="sys-dash-center">
          <PieChart data={sourceShare} size={240}>
            {sourceShare.map((s, i) => (
              <PieSlice index={i} key={s.label} />
            ))}
            <PieCenter defaultLabel="Sources" />
          </PieChart>
        </div>
      </Panel>

      <Panel title="Product quality" hint="radar">
        <div className="sys-dash-center">
          <RadarChart data={qualityData} metrics={qualityMetrics} size={280}>
            <RadarGrid />
            <RadarAxis />
            <RadarLabels fontSize={10} offset={16} />
            {qualityData.map((row, i) => (
              <RadarArea key={row.label} index={i} color="var(--chart-line-primary)" />
            ))}
          </RadarChart>
        </div>
      </Panel>

      {/* row 3 — deep dive */}
      <Panel title="Service performance" hint="latency vs errors">
        <ScatterChart data={serviceScatter}>
          <Grid horizontal />
          <Scatter dataKey="latency" />
          <Scatter dataKey="errors" />
          <XAxis numTicks={4} />
          <ChartTooltip />
        </ScatterChart>
      </Panel>

      <Panel title="User journey" hint="sankey">
        <SankeyChart data={sankeyData} aspectRatio="2 / 1">
          <SankeyLink />
          <SankeyNode />
          <SankeyTooltip />
        </SankeyChart>
      </Panel>

      <Panel title="Users by country" hint="choropleth">
        <ChoroplethChart data={fc} aspectRatio="2 / 1" zoomEnabled zoomMin={1} zoomMax={4}>
          <ChoroplethFeatureComponent getFeatureColor={featureColor} stroke="rgba(10,10,15,.55)" strokeWidth={0.5} />
          <ChoroplethTooltip
            getFeatureName={(f) => String(f.properties?.name ?? "—")}
            getFeatureValue={(f) => Number(f.properties?.value ?? 0) || undefined}
            valueLabel="users"
          />
        </ChoroplethChart>
      </Panel>

      {/* incidents */}
      <div className="sys-incidents">
        <header className="sys-dash-panel-head">
          <span className="sys-dash-panel-title">Active incidents</span>
          <span className="sys-dash-panel-hint">{INCIDENTS.length} open</span>
        </header>
        <ul className="sys-incident-list">
          {INCIDENTS.map((inc, i) => (
            <li key={inc.title} className={`sys-incident sev-${inc.sev.toLowerCase()}`}>
              <span className="sys-incident-sev">{inc.sev}</span>
              <span className="sys-incident-title">{inc.title}</span>
              <span className="sys-incident-meta">{inc.status} · started {rel(i * 120 + 2)}m ago</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sys-alerts">
        <header className="sys-dash-panel-head">
          <span className="sys-dash-panel-title">Alerts</span>
          <span className="sys-dash-panel-hint">12 total · last 24h</span>
        </header>
        <ul className="sys-alert-list">
          <li><b className="sys-alert-dot high" /> High error rate · Checkout Service</li>
          <li><b className="sys-alert-dot mid" /> CPU &gt; 85% · web-12</li>
          <li><b className="sys-alert-dot low" /> Disk 78% · db-replica-3</li>
          <li><b className="sys-alert-dot mid" /> Memory spike · queue-worker</li>
          <li><b className="sys-alert-dot low" /> Latency drift · search</li>
        </ul>
      </div>
    </div>
  );
}