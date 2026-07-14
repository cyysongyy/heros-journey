import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Batch-generate the 12 Hero's Journey stage illustrations with gpt-image-1.
// Usage:  node gen_all.mjs [outputDir] [size] [quality]
//   outputDir default: ./images
//   size      default: 1024x1024   (also 1024x1536 portrait, 1536x1024 landscape)
//   quality   default: medium      (low | medium | high)
// Reads the API key from the OPENAI_API_KEY environment variable.

const key = process.env.OPENAI_API_KEY;
if (!key) { console.error("ERROR: OPENAI_API_KEY not set"); process.exit(1); }

const outDir  = process.argv[2] || "./images";
const size    = process.argv[3] || "1024x1024";
const quality = process.argv[4] || "medium";
mkdirSync(outDir, { recursive: true });

const STYLE = "Antique fantasy storybook illustration, ink and watercolor, warm earthy muted tones, aged parchment feel, painterly and detailed, cinematic soft lighting. The SAME protagonist appears throughout: a young hero in a green hooded cloak. No text, no words, no letters anywhere in the image.";

const stages = [
  ["01_ordinary_world",  "The young hero in a green hooded cloak stands in a peaceful farming village at dawn, cottages and rolling green hills, calm everyday life, wisps of chimney smoke."],
  ["02_call_to_adventure","A mysterious herald on horseback arrives at the village edge, offering a glowing sealed letter to the young hero in the green cloak; a distant adventure beckons on the horizon."],
  ["03_refusal",         "The young hero in the green cloak hesitates at a crossroads at dusk, glancing back longingly at the safe village, fear and doubt in their posture; one road leads into dark wilderness."],
  ["04_meeting_mentor",  "An old wise mentor with a long beard and staff hands a glowing sword to the kneeling young hero in the green cloak inside a candlelit cottage, warm mystical light."],
  ["05_crossing_threshold","The young hero in the green cloak steps through a great glowing stone gateway, leaving the familiar green land behind and entering a strange misty unknown world."],
  ["06_tests_allies_enemies","The young hero in the green cloak walks a winding road joined by loyal companions, while shadowy enemies lurk among the rocks; a world of trials."],
  ["07_inmost_cave",     "The young hero in the green cloak and companions cautiously approach the yawning black mouth of an ominous cave set in jagged mountains, tension and dread in the air."],
  ["08_the_ordeal",      "The young hero in the green cloak battles a huge fearsome dragon in a fiery cavern, a desperate life-or-death struggle, sword raised, dramatic firelight."],
  ["09_reward",          "The victorious young hero in the green cloak holds aloft a glowing magical treasure in the dragon's lair, golden light pouring out, triumph and relief."],
  ["10_road_back",       "The young hero in the green cloak races home across a wild rocky landscape carrying the treasure, pursued by shadows, mountains behind, a sense of urgency."],
  ["11_resurrection",    "The young hero in the green cloak rises transformed in a burst of radiant light after a final trial, reborn and stronger, glowing aura, dawn breaking."],
  ["12_return_elixir",   "The transformed young hero in the green cloak returns to a joyful village bearing a glowing gift that heals the land, villagers celebrating, warm sunrise, the circle complete."],
];

async function gen(name, prompt) {
  const outfile = join(outDir, name + ".png");
  if (existsSync(outfile)) { console.log(`skip  ${name} (exists)`); return; }
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-image-1", prompt: `${STYLE}\n\nScene: ${prompt}`, size, quality, n: 1 }),
  });
  const text = await res.text();
  if (!res.ok) { console.error(`FAIL  ${name}: HTTP ${res.status} ${text.slice(0,300)}`); return; }
  const b64 = JSON.parse(text)?.data?.[0]?.b64_json;
  if (!b64) { console.error(`FAIL  ${name}: no image data`); return; }
  writeFileSync(outfile, Buffer.from(b64, "base64"));
  console.log(`OK    ${name}`);
}

console.log(`Generating ${stages.length} images -> ${outDir} (${size}, ${quality})`);
for (const [name, prompt] of stages) {
  try { await gen(name, prompt); } catch (e) { console.error(`ERROR ${name}: ${e.message}`); }
}
console.log("done");
