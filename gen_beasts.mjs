import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Batch-generate the 12 inner-demon "beast" illustrations for beast_trials.html
// with gpt-image-1, in the same ink-and-watercolor style as gen_all.mjs.
//
// Usage:  node gen_beasts.mjs [outputDir] [size] [quality]
//   outputDir default: ./images
//   size      default: 1024x1024   (square; the game frames it in a rounded box)
//   quality   default: medium      (low | medium | high)
// Reads the API key from the OPENAI_API_KEY environment variable.
// Files are named beast1.png … beast12.png — exactly what the game expects,
// so dropping them into ./images/ replaces the emoji placeholders automatically.

const key = process.env.OPENAI_API_KEY;
if (!key) { console.error("ERROR: OPENAI_API_KEY not set"); process.exit(1); }

const outDir  = process.argv[2] || "./images";
const size    = process.argv[3] || "1024x1024";
const quality = process.argv[4] || "medium";
mkdirSync(outDir, { recursive: true });

const STYLE = "Antique fantasy storybook illustration, ink and watercolor, warm earthy muted tones, aged parchment feel, painterly and detailed, cinematic soft lighting. A single ominous creature centered in the frame against a simple dark background. No text, no words, no letters anywhere in the image.";

const beasts = [
  ["beast1",  "The Shade of Sloth: a sluggish, heavy shadow-creature, half-melted and slumped across soft bedding and piled pillows, thick and tar-like, half-closed drowsy eyes, wreathed in a warm but drowning mist."],
  ["beast2",  "The Dread: a bodiless phantom of fear, a churning mass of grey-black smoke condensing into a vague menacing face with hollow glowing eyes, the smoke trailing off into many reaching hands, cold and oppressive."],
  ["beast3",  "The Doubt-Serpent: a coiling dark-green serpent whose scales reflect fractured mirror-images, a forked tongue, sly bewitching eyes, its body wound around a single softly glowing heart."],
  ["beast4",  "The Pride-Colossus: a towering colossus in mirror-smooth metal armor, head held high and looking down with arrogance, its polished mirror armor faintly reflecting the viewer's own figure."],
  ["beast5",  "The Envy-Beast: a greedy green demon-beast with many grasping hands, each hand snatching stolen light, its shape half-mimicking other beings, its face full of longing and resentment."],
  ["beast6",  "The Wrath-Flame: a raging bull-demon made of fire and molten lava, flames flaring higher with its fury, blazing red eyes, breathing fire, charging forward in a violent posture."],
  ["beast7",  "The Greed-Wyrm: an enormous dragon coiled atop a mountain of gold, its cavernous maw perpetually gaping to devour, jewels embedded between its scales yet still starving, faint glimmers in the deep cave."],
  ["beast8",  "The Regret-Wraith: a translucent, head-bowed weeping ghost, an old wound on its body that keeps splitting open and seeping pale light, drifting broken fragments of the past around it."],
  ["beast9",  "The Lonely One: a lonely huddled figure wrapped in a vast spiderweb, surrounded by endless empty darkness with a single faint distant light, cold and estranged."],
  ["beast10", "The Despair-Titan: a colossal, sky-blotting black shadow that endlessly regenerates and cannot be dispersed, heavy and drooping, a dense blackness that swallows the light around it, immensely oppressive."],
  ["beast11", "The Void: a floating sphere and rift of pure black void, its edges warping and devouring everything around it, absolute emptiness at its center, points of starlight being sucked in and vanishing."],
  ["beast12", "The Shadow (the hero's own self): a dark mirror-image identical to the protagonist — the same young hero in a green hooded cloak, but formed entirely of shadow with coldly glowing eyes, standing in confrontation, half in light and half in dark."],
];

async function gen(name, prompt) {
  const outfile = join(outDir, name + ".png");
  if (existsSync(outfile)) { console.log(`skip  ${name} (exists)`); return; }
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-image-1", prompt: `${STYLE}\n\nSubject: ${prompt}`, size, quality, n: 1 }),
  });
  const text = await res.text();
  if (!res.ok) { console.error(`FAIL  ${name}: HTTP ${res.status} ${text.slice(0,300)}`); return; }
  const b64 = JSON.parse(text)?.data?.[0]?.b64_json;
  if (!b64) { console.error(`FAIL  ${name}: no image data`); return; }
  writeFileSync(outfile, Buffer.from(b64, "base64"));
  console.log(`OK    ${name}`);
}

console.log(`Generating ${beasts.length} beasts -> ${outDir} (${size}, ${quality})`);
for (const [name, prompt] of beasts) {
  try { await gen(name, prompt); } catch (e) { console.error(`ERROR ${name}: ${e.message}`); }
}
console.log("done");
