import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Generate the remaining title cover badges with gpt-image-1.
// Each cover is square and gets clipped to a circle by the title screen,
// so every prompt asks for a centered, full-bleed composition.
//
// Usage:  node gen_covers.mjs [outputDir] [size] [quality]
//   outputDir default: ./images
//   size      default: 1024x1024   (square; the title screen clips it to a circle)
//   quality   default: high        (low | medium | high)
// Reads the API key from the OPENAI_API_KEY environment variable.
// Existing files are skipped, so the covers already finished by hand
// (hall, inner, odyssey) are never overwritten.

const key = process.env.OPENAI_API_KEY;
if (!key) { console.error("ERROR: OPENAI_API_KEY not set"); process.exit(1); }

const outDir  = process.argv[2] || "./images";
const size    = process.argv[3] || "1024x1024";
const quality = process.argv[4] || "high";
mkdirSync(outDir, { recursive: true });

// Applies to every cover: one image, edge to edge, nothing written on it.
const RULES = "Output ONE single full-bleed illustration. The painting must run all the way to all four edges — no white paper margin, no border, no frame. This is not a storyboard, not a comic, not a contact sheet — no panels, no captions, no title. No text, no lettering, no words, no letters anywhere in the image. Composition centered and balanced, so it still reads when cropped into a circle.";

const covers = [
  ["story_cover",
   "Style: antique fantasy storybook illustration, ink and watercolor, warm earthy muted tones with gold, aged parchment feel, painterly, cinematic soft lighting.",
   "The emblem of an ancient epic — a lone bearded hero in a hooded green cloak stands at the exact center, seen from behind, facing a vast horizon where twelve faint golden thresholds recede into the distance like doorways of light across a mythic landscape of ziggurats, deserts and stars. A great golden ring encircles the scene. Ancient, legendary, the weight of a story told for four thousand years."],

  ["your_odyssey_cover",
   "Style: dark symbolic watercolor, warm gold and deep teal-blue palette, dreamlike, painterly, personal and reflective, cinematic soft light, aged paper texture.",
   "The emblem of a personal odyssey — an ordinary present-day person stands at the exact center on a road that begins at their feet and winds outward into a vast mythic landscape, passing twelve faint glowing thresholds arranged around them in a great golden ring. A warm golden compass rose glows softly beneath their feet. The hero is anyone; the road is their own life. Intimate, hopeful, mythic."],

  ["beast_cover",
   "Style: antique fantasy storybook illustration, ink and watercolor, warm earthy muted tones with gold and deep crimson shadow, aged parchment feel, painterly, dramatic cinematic lighting.",
   "The emblem of a war against one's own demons — a lone hero in a green hooded cloak stands at the exact center with a raised glowing sword, encircled by twelve shadowy demon silhouettes looming out of dark smoke around them: a drowsy sagging shape, a many-handed grasping one, a horned flame-bull, a coiled serpent, a mirror-armored colossus, a formless void. The demons are made of shadow, not gore. A golden ring of light holds them back. Defiant, dramatic, the moment before the first strike."],

  ["deck_cover",
   "Style: antique fantasy storybook illustration, ink and watercolor, warm gold and deep violet palette, aged parchment feel, painterly, cinematic soft lighting, arcane tarot atmosphere. No numbers, no card pips, no suit symbols.",
   "The emblem of a hero whose deck is their sword — a lone cloaked figure stands at the exact center, arms slightly raised, as a fan of glowing golden playing cards sweeps up and around them in a great spiral ring, each card blank and radiant with light, some dissolving into embers and stars. Below, a faint arcane circle glows on dark stone. Magical, strategic, the instant a hand is played."],
];

async function gen(name, style, subject) {
  const outfile = join(outDir, name + ".png");
  if (existsSync(outfile)) { console.log(`skip  ${name} (exists)`); return; }
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt: `${style}\n\n${RULES}\n\nSubject: ${subject}`,
      size, quality, n: 1,
    }),
  });
  const text = await res.text();
  if (!res.ok) { console.error(`FAIL  ${name}: HTTP ${res.status} ${text.slice(0, 300)}`); return; }
  const b64 = JSON.parse(text)?.data?.[0]?.b64_json;
  if (!b64) { console.error(`FAIL  ${name}: no image data`); return; }
  writeFileSync(outfile, Buffer.from(b64, "base64"));
  console.log(`OK    ${name}`);
}

console.log(`Generating ${covers.length} covers -> ${outDir} (${size}, ${quality})`);
for (const [name, style, subject] of covers) {
  try { await gen(name, style, subject); } catch (e) { console.error(`ERROR ${name}: ${e.message}`); }
}
console.log("done");
