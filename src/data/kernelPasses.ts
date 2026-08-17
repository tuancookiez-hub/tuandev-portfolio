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
};

const T = 6;
const COL = 148;
const ROW = 148;

function n(
  id: string,
  col: number,
  row: number,
  label: string,
  subtitle: string,
  tone: Tone,
  fused = false,
): Node<OpData> {
  return {
    id,
    type: "op",
    position: { x: col * COL, y: row * ROW },
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
    metrics: { throughput: 65, nodes: 12, dispatches: 331 },
    nodes: [
      n("load", 0, 1, "load", "input", "teal"),
      n("embed", 1, 1, "embed", "tok", "blue"),
      n("q", 2, 0, "attn_q", "q", "violet"),
      n("k", 2, 1, "attn_k", "k", "violet"),
      n("v", 2, 2, "attn_v", "v", "violet"),
      n("score", 3, 0.35, "qk_score", "attn", "violet"),
      n("mix", 4, 1, "av_mix", "attn", "violet"),
      n("o", 5, 1, "attn_o", "proj", "violet"),
      n("gate", 6, 0, "gate_proj", "moe", "cyan"),
      n("up", 6, 2, "up_proj", "mlp", "cyan"),
      n("down", 7, 1, "down_proj", "mlp", "cyan"),
      n("head", 8, 1, "unembed", "logits", "blue"),
    ],
    edges: [
      e("a1", "load", "embed"),
      e("a2", "embed", "q"), e("a3", "embed", "k"), e("a4", "embed", "v"),
      e("a5", "q", "score"), e("a6", "k", "score"),
      e("a7", "score", "mix"), e("a8", "v", "mix"),
      e("a9", "mix", "o"),
      e("a10", "o", "gate"), e("a11", "o", "up"),
      e("a12", "gate", "down"), e("a13", "up", "down"),
      e("a14", "down", "head"),
    ],
  },
  {
    id: "p02",
    pass: 2,
    total: T,
    label: "PASS 02 / 06 · first fusion wave",
    stage: "Norm + embed fused in place",
    metrics: { throughput: 118, nodes: 9, dispatches: 214 },
    nodes: [
      n("load", 0.2, 1, "load", "input", "teal"),
      n("pre", 1.4, 1, "embed+ln", "fused", "teal", true),
      n("q", 2.8, 0, "attn_q", "q", "violet"),
      n("k", 2.8, 1, "attn_k", "k", "violet"),
      n("v", 2.8, 2, "attn_v", "v", "violet"),
      n("score", 4.2, 0.4, "rope+score", "fused", "violet", true),
      n("mix", 5.6, 1, "av_mix", "attn", "violet"),
      n("mlp", 7, 1, "moe_out", "fused", "cyan", true),
      n("head", 8.2, 1, "unembed", "logits", "blue"),
    ],
    edges: [
      e("b1", "load", "pre"),
      e("b2", "pre", "q"), e("b3", "pre", "k"), e("b4", "pre", "v"),
      e("b5", "q", "score"), e("b6", "k", "score"),
      e("b7", "score", "mix"), e("b8", "v", "mix"),
      e("b9", "mix", "mlp"), e("b10", "mlp", "head"),
    ],
  },
  {
    id: "p03",
    pass: 3,
    total: T,
    label: "PASS 03 / 06 · attention fusion",
    stage: "QKV packed into one dispatch",
    metrics: { throughput: 186, nodes: 6, dispatches: 96 },
    nodes: [
      n("load", 0.6, 1, "load", "input", "teal"),
      n("pre", 2.2, 1, "embed+ln", "fused", "teal", true),
      n("qkv", 3.8, 0.2, "attn_qkv", "fused", "violet", true),
      n("attn", 3.8, 1.8, "score+sm+mix", "fused", "violet", true),
      n("mlp", 5.8, 1, "moe_mlp", "fused", "cyan", true),
      n("head", 7.4, 1, "ln+unembed", "fused", "blue", true),
    ],
    edges: [
      e("c1", "load", "pre"), e("c2", "pre", "qkv"), e("c3", "pre", "attn"),
      e("c4", "qkv", "mlp"), e("c5", "attn", "mlp"), e("c6", "mlp", "head"),
    ],
  },
  {
    id: "p04",
    pass: 4,
    total: T,
    label: "PASS 04 / 06 · KDA megakernel",
    stage: "Attention + output fused",
    metrics: { throughput: 268, nodes: 4, dispatches: 41 },
    nodes: [
      n("load", 1.2, 1, "load", "input", "teal"),
      n("pre", 3, 1, "embed+ln", "fused", "teal", true),
      n("kda", 5, 1, "KDA megakernel", "fused", "violet", true),
      n("head", 7, 1, "lm_head", "fused", "blue", true),
    ],
    edges: [
      e("d1", "load", "pre"), e("d2", "pre", "kda"), e("d3", "kda", "head"),
    ],
  },
  {
    id: "p05",
    pass: 5,
    total: T,
    label: "PASS 05 / 06 · epilogue fusion",
    stage: "Dense & MoE epilogue fused",
    metrics: { throughput: 341, nodes: 3, dispatches: 18 },
    nodes: [
      n("pre", 1.8, 1, "prefill", "fused", "teal", true),
      n("kda", 4.2, 1, "KDA megakernel", "fused", "violet", true),
      n("head", 6.6, 1, "epilogue+head", "fused", "blue", true),
    ],
    edges: [
      e("e1", "pre", "kda"), e("e2", "kda", "head"),
    ],
  },
  {
    id: "p06",
    pass: 6,
    total: T,
    label: "PASS 06 / 06 · fused decode kernel",
    stage: "Single decode path",
    metrics: { throughput: 406, nodes: 2, dispatches: 8 },
    nodes: [
      n("kda", 2.6, 1, "KDA decode", "fused", "violet", true),
      n("head", 5.6, 1, "lm_head", "fused", "blue", true),
    ],
    edges: [
      e("f1", "kda", "head"),
    ],
  },
];
