"use client";

/**
 * L4 — inspection data tier using the REAL @bklit registry chart components:
 * BarChart, ChoroplethChart, Gauge. All animated (clip-reveal / count-up),
 * themed via the --chart-* tokens in bklit-charts.css.
 */

import { useMemo } from "react";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import type { Topology } from "topojson-specification";
import worldTopo from "../data/world-countries.json";
import { BarChart } from "./charts/bar-chart";
import { Bar } from "./charts/bar";
import { BarXAxis } from "./charts/bar-x-axis";
import { Grid } from "./charts/grid";
import { ChartTooltip } from "./charts/tooltip";
import {
  ChoroplethChart,
  ChoroplethFeatureComponent,
  ChoroplethTooltip,
  type ChoroplethFeature,
} from "./charts/choropleth";
import { Gauge } from "./charts/gauge";

// ─── data ────────────────────────────────────────────────────

const months = [
  { name: "Jan", value: 1280 },
  { name: "Feb", value: 1560 },
  { name: "Mar", value: 1100 },
  { name: "Apr", value: 1850 },
  { name: "May", value: 1680 },
  { name: "Jun", value: 2120 },
];

/** Provider / client reach by country (ISO numeric id → value). */
const reach: Record<string, number> = {
  "840": 120, // US
  "124": 45, // CA
  "826": 62, // GB
  "276": 48, // DE
  "250": 30, // FR
  "156": 88, // CN
  "392": 55, // JP
  "410": 22, // KR
  "702": 40, // SG
  "458": 25, // MY
  "356": 38, // IN
  "36": 35, // AU
};

const REACH_MAX = 120;

function featureColor(feature: ChoroplethFeature): string {
  const v = Number(feature.properties?.value ?? 0);
  if (!v) return "rgba(120,140,160,.18)";
  const t = Math.min(1, v / REACH_MAX);
  return `rgba(20,184,166,${(0.25 + t * 0.75).toFixed(2)})`;
}

export default function BklitShowcase() {
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
    <div className="bklit-ui sys-bklit">
      <div className="sys-bklit-bar">
        <BarChart data={months} xDataKey="name">
          <Grid horizontal />
          <Bar dataKey="value" fill="var(--chart-line-primary)" lineCap="round" />
          <BarXAxis />
          <ChartTooltip />
        </BarChart>
      </div>
      <div className="sys-bklit-row">
        <div className="sys-bklit-map">
          <ChoroplethChart
            data={fc}
            aspectRatio="2 / 1"
            zoomEnabled
            zoomMin={1}
            zoomMax={4}
          >
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
        </div>
        <div className="sys-bklit-gauge">
          <Gauge
            value={87}
            centerValue={87}
            totalNotches={40}
            defaultLabel="Capacity"
            suffix="%"
          />
        </div>
      </div>
    </div>
  );
}
