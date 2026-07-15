import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Generate the character-portrait art used by heros_journey_game.html.
//
// Background scene art (00_map.png, 01_ordinary_world.png … 12_return_elixir.png)
// is produced by gen_all.mjs. This script fills the *dialogue portrait* slots the
// game references as ./images/img16.png … ./images/img34.png — the original raw
// generation filenames that were never uploaded, which is why those portraits
// were blank. The filenames here match exactly what the game expects, so once the
// PNGs land in ./images/ the portraits appear with no code changes.
//
// Usage:  node gen_portraits.mjs [outputDir] [size] [quality]
//   outputDir default: ./images
//   size      default: 1024x1024   (square crops cleanly into the circular avatars)
//   quality   default: medium      (low | medium | high)
// Reads the API key from the OPENAI_API_KEY environment variable.

const key = process.env.OPENAI_API_KEY;
if (!key) { console.error("ERROR: OPENAI_API_KEY not set"); process.exit(1); }

const outDir  = process.argv[2] || "./images";
const size    = process.argv[3] || "1024x1024";
const quality = process.argv[4] || "medium";
mkdirSync(outDir, { recursive: true });

// Same visual language as gen_all.mjs, tuned for a circular character portrait.
const STYLE = "Antique fantasy storybook illustration, ink and watercolor, warm earthy muted tones, aged parchment feel, painterly and detailed, cinematic soft lighting. Close-up head-and-shoulders character portrait, the subject centered and facing the viewer, softly blurred simple background. No text, no words, no letters anywhere in the image.";

// [ filename, character/scene prompt ] — filenames match the game's <img> src values.
const portraits = [
  ["img16", "Enkidu, the wild man of the steppe from the Epic of Gilgamesh: powerfully built, long matted hair and beard tangled with leaves, sun-bronzed skin, wearing rough animal hides, untamed yet noble with kind steady eyes."],
  ["img17", "Humbaba, the monstrous guardian of the Cedar Forest: a fearsome ancient giant's face with bark-like ridged skin, glowing eyes, a mane of coiling vines and cedar, intimidating and primeval, deep dramatic shadow."],
  ["img19", "Anubis, the Egyptian jackal-headed god of the dead: sleek black jackal head, golden and lapis-blue Egyptian regalia, solemn and impartial expression, faint gold scales of judgment behind."],
  ["img20", "Siduri, the wise alewife and tavern-keeper by the edge of the sea: a serene middle-aged woman with kind knowing eyes, a soft veil and simple robes, holding a cup, warm and comforting."],
  ["img21", "Utnapishtim, the ancient immortal survivor of the great flood: a very old serene man with a long flowing white beard, weathered peaceful face, distant timeless eyes, robes of a forgotten age."],
  ["img22", "Orpheus, the grieving Greek poet-musician: a beautiful sorrowful young man crowned with laurel, cradling a lyre, tender melancholy eyes glancing back over his shoulder."],
  ["img23", "A wise old mentor with a long grey beard and a deep hood, gentle sage eyes, resting both hands on a wooden staff, warm reassuring presence, faint glowing light around him."],
  ["img33", "An allegorical Narrator: a timeless hooded storyteller in a deep-blue star-flecked cloak, face half in shadow, holding an open softly glowing book, mysterious and omniscient."],
  ["img34", "A phoenix, the mythic firebird of rebirth, rising with radiant orange and gold plumage wreathed in gentle flame and drifting embers, transformation and renewal, glowing warm light."],
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

console.log(`Generating ${portraits.length} portraits -> ${outDir} (${size}, ${quality})`);
for (const [name, prompt] of portraits) {
  try { await gen(name, prompt); } catch (e) { console.error(`ERROR ${name}: ${e.message}`); }
}
console.log("done");
