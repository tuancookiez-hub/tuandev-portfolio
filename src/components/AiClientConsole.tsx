"use client";

/**
 * AIClient2API console — level 2. The user's real product: a model-routing
 * proxy exposing many models through one compatible client. Shows the provider
 * pool (with health + failover), the golden routing signals (latency / tokens /
 * cost), and a live routing workflow. All numbers are representative samples,
 * never live data.
 */

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Panel } from "./SystemsWidgets";
import { LineChart } from "./charts/line-chart";
import { Line } from "./charts/line";
import { Grid } from "./charts/grid";
import { XAxis } from "./charts/x-axis";
import { ChartTooltip } from "./charts/tooltip";

// ─── Provider pool ────────────────────────────────────────────

type Provider = {
  id: string;
  name: string;
  instance: string;
  latency: number;
  health: "ok" | "warn" | "down";
  shared: boolean;
};

const pool: Provider[] = [
  { id: "p1", name: "Kimi", instance: "kimi-k3-max", latency: 184, health: "ok", shared: false },
  { id: "p2", name: "DeepSeek", instance: "deepseek-reasoner", latency: 262, health: "ok", shared: true },
  { id: "p3", name: "Claude", instance: "claude-sonnet-4", latency: 210, health: "ok", shared: false },
  { id: "p4", name: "GPT", instance: "gpt-4.1-mini", latency: 298, health: "ok", shared: true },
  { id: "p5", name: "Grok", instance: "grok-4", latency: 388, health: "warn", shared: false },
  { id: "p6", name: "Qwen", instance: "qwen2.5-coder", latency: 224, health: "ok", shared: true },
];

const sparkData: Record<string, number[]> = {
  latency: [298, 262, 306, 240, 258, 232, 245, 220, 236, 222, 232, 215, 226, 208, 232],
  tokens: [120, 180, 260, 320, 410, 520, 640, 780, 900, 1040, 1220, 1380, 1560, 1740, 1842],
  cost: [3.2, 3.1, 3.4, 3.0, 3.3, 2.9, 3.2, 2.8, 3.1, 2.9, 3.0, 2.7, 2.9, 2.8, 2.6],
};

const HOUR = 3600_000;
const signalData = {
  latency: sparkData.latency.map((v, i) => ({ date: new Date(Date.now() - (14 - i) * HOUR), value: v })),
  tokens: sparkData.tokens.map((v, i) => ({ date: new Date(Date.now() - (14 - i) * HOUR), value: v })),
  cost: sparkData.cost.map((v, i) => ({ date: new Date(Date.now() - (14 - i) * HOUR), value: v })),
};

const routes = [
  { req: "#1284", model: "kimi-k3-max", route: "openai-custom", status: "200" },
  { req: "#1283", model: "deepseek-reasoner", route: "deepseek-alias", status: "200" },
  { req: "#1282", model: "claude-sonnet-4", route: "anthropic-native", status: "200" },
  { req: "#1281", model: "gpt-4.1-mini", route: "azure-openai", status: "429" },
  { req: "#1280", model: "kimi-k3-max", route: "openai-custom", status: "200" },
  { req: "#1279", model: "qwen2.5-coder", route: "dashscope", status: "200" },
];

function tint(v: number): string {
  if (v < 0.4) return "rgba(94,234,212,.1)";
  if (v < 0.7) return "rgba(96,165,250,.14)";
  return "rgba(232,121,249,.16)";
}

export default function AiClientConsole() {
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { once: true, margin: "-40px" });
  const [shown, setShown] = useState(0);
  const healthTone = (h: Provider["health"]) => (h === "ok" ? "#2f8f5b" : h === "warn" ? "#c98a12" : "#c4453c");

  useEffect(() => {
    if (inView) {
      const t = setInterval(() => setShown((s) => (s + 1) % routes.length), 1600);
      return () => clearInterval(t);
    }
  }, [inView]);

  return (
    <div className="acl-shell" ref={root}>
      <div className="acl-top sys-ov-charts bklit-ui">
        <LineChart data={signalData.latency}>
          <Grid horizontal />
          <Line dataKey="value" stroke="var(--chart-line-primary)" />
          <XAxis numTicks={3} />
          <ChartTooltip />
        </LineChart>
        <LineChart data={signalData.tokens}>
          <Grid horizontal />
          <Line dataKey="value" stroke="var(--chart-line-secondary)" />
          <XAxis numTicks={3} />
          <ChartTooltip />
        </LineChart>
        <LineChart data={signalData.cost}>
          <Grid horizontal />
          <Line dataKey="value" stroke="var(--chart-3)" />
          <XAxis numTicks={3} />
          <ChartTooltip />
        </LineChart>
      </div>

      <div className="acl-providers">
        <Panel title="Provider pool" hint={`${pool.length} instances · shared-fallback aware`}>
          <div className="acl-pool">
            {pool.map((p, i) => (
              <motion.div
                key={p.id}
                className={`acl-provider hv-${p.health}`}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <span className="acl-pool-dot" style={{ background: healthTone(p.health) }} />
                <div className="acl-pool-meta">
                  <b>{p.name}</b>
                  <span>{p.instance}</span>
                </div>
                <div className="acl-pool-stat">
                  <b>{p.latency}ms</b>
                  <span className="acl-pool-shared">{p.shared ? "shared" : "dedicated"}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="acl-footer">
        <Panel title="Live routing workflow" hint="recent routed requests · sample">
          <div className="acl-route">
            {routes.map((r, i) => (
              <motion.div
                key={r.req}
                className={`acl-route-row ${i === shown ? "is-live" : ""}`}
                initial={{ opacity: 0.45, x: 0 }}
                animate={{ opacity: i === shown ? 1 : 0.45 }}
                transition={{ duration: 0.4 }}
                style={{ background: i === shown ? tint((i % 3) / 3) : "none" }}
              >
                <span className="acl-route-req">{r.req}</span>
                <span className="acl-route-model">{r.model}</span>
                <span className="acl-route-path">{r.route}</span>
                <b className={`acl-route-status st-${r.status}`}>{r.status}</b>
              </motion.div>
            ))}
          </div>
        </Panel>
        <motion.div
          className="acl-callout"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3>Plug the model in,<br />swap the provider later.</h3>
          <p>How AIClient2API works — a proxy that keeps the client stable while the pool of models rotates underneath.</p>
        </motion.div>
      </div>
    </div>
  );
}
