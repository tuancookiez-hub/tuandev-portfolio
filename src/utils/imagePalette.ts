import type { WorldId } from "../data/worlds";

type RGB = [number, number, number];

export type Palette = {
  bg: string;
  ink: string;
  soft: string;
  accent: string;
  deep: string;
  wash: string;
  rgb: string;
};

export const fallback: Record<WorldId | "neutral", Palette> = {
  neutral: { bg: "#eef0ed", ink: "#152019", soft: "#677269", accent: "#809088", deep: "#25332b", wash: "#536259", rgb: "128 144 136" },
  hospitality: { bg: "#e8e6d7", ink: "#1d291f", soft: "#667060", accent: "#a89060", deep: "#303018", wash: "#687351", rgb: "168 144 96" },
  systems: { bg: "#e8f0f4", ink: "#10243a", soft: "#637a8e", accent: "#477da2", deep: "#001830", wash: "#375d75", rgb: "71 125 162" },
  creative: { bg: "#000c22", ink: "#edf8ff", soft: "#90b9d6", accent: "#127bc0", deep: "#000018", wash: "#063967", rgb: "18 123 192" },
  robotics: { bg: "#dbe4e7", ink: "#142a32", soft: "#61777d", accent: "#507b85", deep: "#001818", wash: "#36565d", rgb: "80 123 133" },
};

const clamp = (value: number) => Math.max(0, Math.min(255, Math.round(value)));
const hex = (rgb: RGB) => `#${rgb.map((value) => clamp(value).toString(16).padStart(2, "0")).join("")}`;
const mix = (a: RGB, b: RGB, amount: number): RGB => a.map((value, index) => value + (b[index] - value) * amount) as RGB;
const lum = (rgb: RGB) => (rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722) / 255;
const sat = (rgb: RGB) => (Math.max(...rgb) - Math.min(...rgb)) / 255;

function extract(image: HTMLImageElement): Palette {
  const canvas = document.createElement("canvas");
  canvas.width = 54;
  canvas.height = 72;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (ctx === null) throw new Error("Canvas context unavailable");
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const buckets = new Map<string, { rgb: RGB; count: number }>();
  const all: RGB[] = [];

  for (let index = 0; index < pixels.length; index += 16) {
    if (pixels[index + 3] < 200) continue;
    const rgb: RGB = [pixels[index], pixels[index + 1], pixels[index + 2]];
    all.push(rgb);
    const key = rgb.map((value) => Math.floor(value / 28) * 28).join(",");
    const item = buckets.get(key);
    if (item === undefined) buckets.set(key, { rgb, count: 1 });
    else item.count += 1;
  }

  const ranked = [...buckets.values()].sort((a, b) => b.count - a.count);
  const average = all.reduce<RGB>((sum, rgb) => [sum[0] + rgb[0], sum[1] + rgb[1], sum[2] + rgb[2]], [0, 0, 0]).map((value) => value / Math.max(1, all.length)) as RGB;
  const usable = ranked.filter((item) => lum(item.rgb) > .06 && lum(item.rgb) < .94);
  const dominant = usable[0]?.rgb ?? average;
  const accent = usable
    .filter((item) => lum(item.rgb) > .16 && lum(item.rgb) < .82)
    .sort((a, b) => (sat(b.rgb) * 2 + b.count / all.length) - (sat(a.rgb) * 2 + a.count / all.length))[0]?.rgb ?? dominant;
  const deep = [...ranked].sort((a, b) => lum(a.rgb) - lum(b.rgb))[0]?.rgb ?? [12, 22, 27];
  const dark = lum(average) < .38;
  const bg = dark ? mix(deep, accent, .2) : mix(dominant, [255, 255, 255], .76);
  const ink: RGB = dark ? [239, 248, 255] : mix(deep, [8, 15, 12], .35);
  const soft = dark ? mix(ink, accent, .42) : mix(ink, bg, .5);
  const wash = dark ? mix(deep, accent, .34) : mix(dominant, accent, .38);

  return {
    bg: hex(bg),
    ink: hex(ink),
    soft: hex(soft),
    accent: hex(accent),
    deep: hex(deep),
    wash: hex(wash),
    rgb: accent.map(clamp).join(" "),
  };
}

export async function imagePalette(id: WorldId): Promise<Palette> {
  const image = new Image();
  image.src = `./assets/gateway/${id}.webp`;
  await image.decode();
  return extract(image);
}
