import type { Edge, Node } from "@xyflow/react";

export type Tone = "violet" | "cyan" | "teal" | "blue";

export type OpData = {
  label: string;
  subtitle?: string;
  fused?: boolean;
  tone?: Tone;
};

export type Pass = {
  id: string;
  pass: number;
  total: number;
  label: string;
  stage: string;
  nodes: Node<OpData>[];
  edges: Edge[];
  metrics: { throughput: number; nodes: number; dispatches: number };
  center: { x: number; y: number; zoom: number };
};

const T = 6;

function n(
  id: string,
  x: number,
  y: number,
  label: string,
  subtitle: string,
  tone: Tone,
  fused = false,
): Node<OpData> {
  return {
    id,
    type: "op",
    position: { x, y },
    data: { label, subtitle, tone, fused },
    draggable: false,
    selectable: false,
  };
}

function e(id: string, source: string, target: string): Edge {
  return { id, source, target, type: "particle" };
}

export const PASSES: Pass[] = [
  {
    id: "p01",
    pass: 1,
    total: T,
    label: "PASS 01 / 06 · graph construction",
    stage: "Fully decomposed operators",
    metrics: { throughput: 65, nodes: 20, dispatches: 331 },
    center: { x: 720, y: 210, zoom: 0.78 },
    nodes: [
      n("load", 0, 188, "load", "input", "teal"),
      n("embed", 150, 188, "embed", "tok", "blue"),
      n("rms0", 300, 188, "rms_norm", "ln1", "teal"),
      n("q", 470, 48, "attn_q", "q", "violet"),
      n("k", 470, 188, "attn_k", "k", "violet"),
      n("v", 470, 328, "attn_v", "v", "violet"),
      n("rope", 640, 118, "rope", "pos", "cyan"),
      n("score", 800, 118, "qk_score", "attn", "violet"),
      n("sm", 960, 118, "softmax", "attn", "violet"),
      n("mix", 1120, 188, "av_mix", "attn", "violet"),
      n("o", 1280, 188, "attn_o", "proj", "violet"),
      n("add0", 1440, 188, "residual", "add", "blue"),
      n("rms1", 1600, 188, "rms_norm", "ln2", "teal"),
      n("gate", 1780, 70, "gate_proj", "moe", "cyan"),
      n("up", 1780, 306, "up_proj", "mlp", "cyan"),
      n("silu", 1940, 70, "silu", "act", "cyan"),
      n("mul", 2100, 188, "gated_mul", "moe", "cyan"),
      n("down", 2260, 188, "down_proj", "mlp", "cyan"),
      n("rms3", 2420, 188, "rms_norm", "final", "teal"),
      n("unembed", 2580, 188, "unembed", "logits", "blue"),
    ],
    edges: [
      e("a1", "load", "embed"), e("a2", "embed", "rms0"),
      e("a3", "rms0", "q"), e("a4", "rms0", "k"), e("a5", "rms0", "v"),
      e("a6", "q", "rope"), e("a7", "k", "rope"),
      e("a8", "rope", "score"), e("a9", "score", "sm"),
      e("a10", "sm", "mix"), e("a11", "v", "mix"),
      e("a12", "mix", "o"), e("a13", "o", "add0"), e("a14", "embed", "add0"),
      e("a15", "add0", "rms1"),
      e("a16", "rms1", "gate"), e("a17", "rms1", "up"),
      e("a18", "gate", "silu"), e("a19", "silu", "mul"), e("a20", "up", "mul"),
      e("a21", "mul", "down"), e("a22", "down", "rms3"), e("a23", "rms3", "unembed"),
    ],
  },
  {
    id: "p02",
    pass: 2,
    total: T,
    label: "PASS 02 / 06 · first fusion wave",
    stage: "Norm + embed fused in place",
    metrics: { throughput: 118, nodes: 14, dispatches: 214 },
    center: { x: 700, y: 210, zoom: 0.82 },
    nodes: [
      n("load", 0, 188, "load", "input", "teal"),
      n("pre", 220, 188, "embed+ln", "fused", "teal", true),
      n("q", 460, 48, "attn_q", "q", "violet"),
      n("k", 460, 188, "attn_k", "k", "violet"),
      n("v", 460, 328, "attn_v", "v", "violet"),
      n("score", 700, 118, "rope+score", "fused", "violet", true),
      n("sm", 940, 118, "softmax", "attn", "violet"),
      n("mix", 1140, 188, "av_mix", "attn", "violet"),
      n("o", 1340, 188, "attn_o", "proj", "violet"),
      n("add0", 1540, 188, "residual", "add", "blue"),
      n("gate", 1780, 70, "gate+silu", "fused", "cyan", true),
      n("up", 1780, 306, "up_proj", "mlp", "cyan"),
      n("mlp", 2020, 188, "moe_out", "fused", "cyan", true),
      n("unembed", 2260, 188, "unembed", "logits", "blue"),
    ],
    edges: [
      e("b1", "load", "pre"),
      e("b2", "pre", "q"), e("b3", "pre", "k"), e("b4", "pre", "v"),
      e("b5", "q", "score"), e("b6", "k", "score"),
      e("b7", "score", "sm"), e("b8", "sm", "mix"), e("b9", "v", "mix"),
      e("b10", "mix", "o"), e("b11", "o", "add0"), e("b12", "pre", "add0"),
      e("b13", "add0", "gate"), e("b14", "add0", "up"),
      e("b15", "gate", "mlp"), e("b16", "up", "mlp"), e("b17", "mlp", "unembed"),
    ],
  },
  {
    id: "p03",
    pass: 3,
    total: T,
    label: "PASS 03 / 06 · attention fusion",
    stage: "QKV packed into one dispatch",
    metrics: { throughput: 186, nodes: 9, dispatches: 96 },
    center: { x: 780, y: 200, zoom: 0.9 },
    nodes: [
      n("load", 20, 188, "load", "input", "teal"),
      n("pre", 260, 188, "embed+ln", "fused", "teal", true),
      n("qkv", 560, 188, "attn_qkv", "fused", "violet", true),
      n("kda", 560, 40, "KDA core", "attention", "violet", true),
      n("attn", 880, 188, "score+sm+mix", "fused", "violet", true),
      n("o", 1180, 188, "attn_o", "proj", "violet"),
      n("mlp", 1500, 188, "moe_mlp", "fused", "cyan", true),
      n("head", 1820, 188, "ln+unembed", "fused", "blue", true),
    ],
    edges: [
      e("c1", "load", "pre"), e("c2", "pre", "qkv"),
      e("c3", "qkv", "attn"), e("c4", "qkv", "kda"), e("c5", "kda", "attn"),
      e("c6", "attn", "o"), e("c7", "o", "mlp"), e("c8", "pre", "mlp"),
      e("c9", "mlp", "head"),
    ],
  },
  {
    id: "p04",
    pass: 4,
    total: T,
    label: "PASS 04 / 06 · KDA megakernel",
    stage: "Attention + output fused",
    metrics: { throughput: 268, nodes: 6, dispatches: 41 },
    center: { x: 740, y: 200, zoom: 1.0 },
    nodes: [
      n("load", 40, 188, "load", "input", "teal"),
      n("pre", 320, 188, "embed+ln", "fused", "teal", true),
      n("kda", 680, 188, "KDA megakernel", "fused", "violet", true),
      n("epi", 1080, 188, "dense+moe", "fused", "cyan", true),
      n("head", 1460, 188, "ln+unembed", "fused", "blue", true),
      n("out", 1800, 188, "logits", "out", "blue"),
    ],
    edges: [
      e("d1", "load", "pre"), e("d2", "pre", "kda"),
      e("d3", "kda", "epi"), e("d4", "epi", "head"), e("d5", "head", "out"),
    ],
  },
  {
    id: "p05",
    pass: 5,
    total: T,
    label: "PASS 05 / 06 · epilogue fusion",
    stage: "Dense & MoE epilogue fused",
    metrics: { throughput: 341, nodes: 5, dispatches: 18 },
    center: { x: 700, y: 200, zoom: 1.05 },
    nodes: [
      n("load", 60, 188, "load", "input", "teal"),
      n("pre", 360, 188, "prefill", "fused", "teal", true),
      n("kda", 700, 188, "KDA megakernel", "fused", "violet", true),
      n("epi", 1080, 188, "epilogue", "fused", "cyan", true),
      n("head", 1440, 188, "lm_head", "fused", "blue", true),
    ],
    edges: [
      e("e1", "load", "pre"), e("e2", "pre", "kda"),
      e("e3", "kda", "epi"), e("e4", "epi", "head"),
    ],
  },
  {
    id: "p06",
    pass: 6,
    total: T,
    label: "PASS 06 / 06 · fused decode kernel",
    stage: "Single decode path",
    metrics: { throughput: 406, nodes: 4, dispatches: 8 },
    center: { x: 640, y: 200, zoom: 1.12 },
    nodes: [
      n("load", 80, 188, "load", "input", "teal"),
      n("kda", 420, 188, "KDA decode", "fused", "violet", true),
      n("epi", 800, 188, "moe epilogue", "fused", "cyan", true),
      n("head", 1180, 188, "lm_head", "fused", "blue", true),
    ],
    edges: [
      e("f1", "load", "kda"), e("f2", "kda", "epi"), e("f3", "epi", "head"),
    ],
  },
];
