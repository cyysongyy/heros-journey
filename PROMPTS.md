# 全部圖片 Prompt 總表 · Master Prompt Sheet

這個專案用到的**所有圖片**的生圖 prompt，集中在這一份。
Every image prompt the project uses, in one place.

## ✅ 全部到位 · All art complete

| 檔名 | 用途 | 章節 |
|---|---|---|
| `images/story_cover.png` | 📖 故事模式封面 | [封面徽章](#-封面徽章--title-cover-badges) |
| `images/your_odyssey_cover.png` | 🧭 你的英雄旅程封面 | 同上 |
| `images/beast_cover.png` | ⚔️ 弒魔英雄旅封面 | 同上 |
| `images/deck_cover.png` | 🃏 英雄牌旅封面 | 同上 |

其他全部已就位：12 場景背景、9 張肖像、12 心魔、5 內在站點、12 奧德賽場景、3 張封面。
Everything else is in place: 12 scenes, 9 portraits, 12 beasts, 5 Inner stations, 12 Odyssey scenes, 3 covers.

## ⚠️ 三條鐵則 · Three rules

1. **一則一張，一個新對話** — 同一個對話連續貼，AI 會把它們合成一張拼貼。
   One prompt per image, in a **fresh conversation** — otherwise the model merges them into one collage.
2. **每則都要含「共用風格」段** — 各章節開頭那段，貼在 Subject 前面。
   Prepend the section's **shared style** block to each Subject.
3. **存檔前確認**：單張滿版、無邊框、無文字。
   Before saving, confirm: one full-bleed image, no frame, no text.

## 分章 · Sections

- [🖼️ 封面徽章](#-封面徽章--title-cover-badges) — 7 張正方，缺 4 張
- [📖 十二場景背景](#-十二場景背景--twelve-story-scenes) — 12 張，已完成
- [🎭 角色肖像](#-角色肖像--character-portraits) — 9 張，已完成
- [⚔️ 十二心魔](#️-十二心魔--twelve-beasts) — 12 張，已完成
- 🌀 內在英雄之旅 5 站 → 見 [`INNER.md`](INNER.md)
- ⛵ 奧德賽 12 關 → 見 [`ODYSSEY.md`](ODYSSEY.md)

---

## 🖼️ 封面徽章 · Title Cover Badges

標題畫面的圓形徽章，全部**正方 1024×1024**，會被裁成圓形。完整說明見 [`COVERS.md`](COVERS.md)。
Circular title badges, all **square 1024×1024**. Full detail in [`COVERS.md`](COVERS.md).

| 模式 | 檔名 | 狀態 |
|---|---|---|
| 🏛️ 英雄殿堂 | `hall_cover.png` | ✅ |
| 🌀 內在英雄之旅 | `inner_cover.png` | ✅ |
| ⛵ 奧德賽 · 內在航程 | `odyssey_cover.png` | ✅ |
| 📖 故事模式 | `story_cover.png` | 🔴 缺 |
| 🧭 你的英雄旅程 | `your_odyssey_cover.png` | 🔴 缺 |
| ⚔️ 弒魔英雄旅 | `beast_cover.png` | 🔴 缺 |
| 🃏 英雄牌旅 | `deck_cover.png` | 🔴 缺 |

**四則缺的 prompt 全文在 [`COVERS.md`](COVERS.md)**，或用一行指令生完：

```bash
export OPENAI_API_KEY="sk-..."
node gen_covers.mjs ./images 1024x1024 high
```

---

## 📖 十二場景背景 · Twelve Story Scenes

故事模式的關卡背景。/ Stage backgrounds for Story Mode.

**共用風格 / Shared style（每則都要含）**

```
Antique fantasy storybook illustration, ink and watercolor, warm earthy muted tones, aged parchment feel, painterly and detailed, cinematic soft lighting. The SAME protagonist appears throughout: a young hero in a green hooded cloak. No text, no words, no letters anywhere in the image.

Output ONE single full-bleed illustration, edge to edge — no white paper margin, no border, no frame. Not a storyboard, not a comic, not a contact sheet: no panels, no captions, no title. No text, no lettering, no words, no letters anywhere in the image.
```

**尺寸 / Size：**1024×1024 或 1536×1024 橫式

### 1. 01_ordinary_world → `images/img3.jpg`

```
Subject: The young hero in a green hooded cloak stands in a peaceful farming village at dawn, cottages and rolling green hills, calm everyday life, wisps of chimney smoke.
```

### 2. 02_call_to_adventure → `images/img4.jpg`

```
Subject: A mysterious herald on horseback arrives at the village edge, offering a glowing sealed letter to the young hero in the green cloak; a distant adventure beckons on the horizon.
```

### 3. 03_refusal → `images/img5.png`

```
Subject: The young hero in the green cloak hesitates at a crossroads at dusk, glancing back longingly at the safe village, fear and doubt in their posture; one road leads into dark wilderness.
```

### 4. 04_meeting_mentor → `images/img6.jpg`

```
Subject: An old wise mentor with a long beard and staff hands a glowing sword to the kneeling young hero in the green cloak inside a candlelit cottage, warm mystical light.
```

### 5. 05_crossing_threshold → `images/img7.png`

```
Subject: The young hero in the green cloak steps through a great glowing stone gateway, leaving the familiar green land behind and entering a strange misty unknown world.
```

### 6. 06_tests_allies_enemies → `images/img8.jpg`

```
Subject: The young hero in the green cloak walks a winding road joined by loyal companions, while shadowy enemies lurk among the rocks; a world of trials.
```

### 7. 07_inmost_cave → `images/img9.jpg`

```
Subject: The young hero in the green cloak and companions cautiously approach the yawning black mouth of an ominous cave set in jagged mountains, tension and dread in the air.
```

### 8. 08_the_ordeal → `images/img10.jpg`

```
Subject: The young hero in the green cloak battles a huge fearsome dragon in a fiery cavern, a desperate life-or-death struggle, sword raised, dramatic firelight.
```

### 9. 09_reward → `images/img11.png`

```
Subject: The victorious young hero in the green cloak holds aloft a glowing magical treasure in the dragon's lair, golden light pouring out, triumph and relief.
```

### 10. 10_road_back → `images/img12.jpg`

```
Subject: The young hero in the green cloak races home across a wild rocky landscape carrying the treasure, pursued by shadows, mountains behind, a sense of urgency.
```

### 11. 11_resurrection → `images/img13.jpg`

```
Subject: The young hero in the green cloak rises transformed in a burst of radiant light after a final trial, reborn and stronger, glowing aura, dawn breaking.
```

### 12. 12_return_elixir → `images/img14.png`

```
Subject: The transformed young hero in the green cloak returns to a joyful village bearing a glowing gift that heals the land, villagers celebrating, warm sunrise, the circle complete.
```


---

## 🎭 角色肖像 · Character Portraits

對話中出現的人物頭像。/ Dialogue portraits.

**共用風格 / Shared style（每則都要含）**

```
Antique fantasy storybook illustration, ink and watercolor, warm earthy muted tones, aged parchment feel, painterly and detailed, cinematic soft lighting. Close-up head-and-shoulders character portrait, the subject centered and facing the viewer, softly blurred simple background. No text, no words, no letters anywhere in the image.

Output ONE single full-bleed illustration, edge to edge — no white paper margin, no border, no frame. Not a storyboard, not a comic, not a contact sheet: no panels, no captions, no title. No text, no lettering, no words, no letters anywhere in the image.
```

**尺寸 / Size：**1024×1024 正方

### 1. img16 → `images/img16.png`

```
Subject: Enkidu, the wild man of the steppe from the Epic of Gilgamesh: powerfully built, long matted hair and beard tangled with leaves, sun-bronzed skin, wearing rough animal hides, untamed yet noble with kind steady eyes.
```

### 2. img17 → `images/img17.png`

```
Subject: Humbaba, the monstrous guardian of the Cedar Forest: a fearsome ancient giant's face with bark-like ridged skin, glowing eyes, a mane of coiling vines and cedar, intimidating and primeval, deep dramatic shadow.
```

### 3. img19 → `images/img19.png`

```
Subject: Anubis, the Egyptian jackal-headed god of the dead: sleek black jackal head, golden and lapis-blue Egyptian regalia, solemn and impartial expression, faint gold scales of judgment behind.
```

### 4. img20 → `images/img20.png`

```
Subject: Siduri, the wise alewife and tavern-keeper by the edge of the sea: a serene middle-aged woman with kind knowing eyes, a soft veil and simple robes, holding a cup, warm and comforting.
```

### 5. img21 → `images/img21.png`

```
Subject: Utnapishtim, the ancient immortal survivor of the great flood: a very old serene man with a long flowing white beard, weathered peaceful face, distant timeless eyes, robes of a forgotten age.
```

### 6. img22 → `images/img22.png`

```
Subject: Orpheus, the grieving Greek poet-musician: a beautiful sorrowful young man crowned with laurel, cradling a lyre, tender melancholy eyes glancing back over his shoulder.
```

### 7. img23 → `images/img23.png`

```
Subject: A wise old mentor with a long grey beard and a deep hood, gentle sage eyes, resting both hands on a wooden staff, warm reassuring presence, faint glowing light around him.
```

### 8. img33 → `images/img33.png`

```
Subject: An allegorical Narrator: a timeless hooded storyteller in a deep-blue star-flecked cloak, face half in shadow, holding an open softly glowing book, mysterious and omniscient.
```

### 9. img34 → `images/img34.png`

```
Subject: A phoenix, the mythic firebird of rebirth, rising with radiant orange and gold plumage wreathed in gentle flame and drifting embers, transformation and renewal, glowing warm light.
```


---

## ⚔️ 十二心魔 · Twelve Beasts

弒魔英雄旅的敵人。/ Enemies in Trials of the Beasts.

**共用風格 / Shared style（每則都要含）**

```
Antique fantasy storybook illustration, ink and watercolor, warm earthy muted tones, aged parchment feel, painterly and detailed, cinematic soft lighting. A single ominous creature centered in the frame against a simple dark background. No text, no words, no letters anywhere in the image.

Output ONE single full-bleed illustration, edge to edge — no white paper margin, no border, no frame. Not a storyboard, not a comic, not a contact sheet: no panels, no captions, no title. No text, no lettering, no words, no letters anywhere in the image.
```

**尺寸 / Size：**1024×1024 正方

### 1. beast1 → `images/beast1.png`

```
Subject: The Shade of Sloth: a sluggish, heavy shadow-creature, half-melted and slumped across soft bedding and piled pillows, thick and tar-like, half-closed drowsy eyes, wreathed in a warm but drowning mist.
```

### 2. beast2 → `images/beast2.png`

```
Subject: The Dread: a bodiless phantom of fear, a churning mass of grey-black smoke condensing into a vague menacing face with hollow glowing eyes, the smoke trailing off into many reaching hands, cold and oppressive.
```

### 3. beast3 → `images/beast3.png`

```
Subject: The Doubt-Serpent: a coiling dark-green serpent whose scales reflect fractured mirror-images, a forked tongue, sly bewitching eyes, its body wound around a single softly glowing heart.
```

### 4. beast4 → `images/beast4.png`

```
Subject: The Pride-Colossus: a towering colossus in mirror-smooth metal armor, head held high and looking down with arrogance, its polished mirror armor faintly reflecting the viewer's own figure.
```

### 5. beast5 → `images/beast5.png`

```
Subject: The Envy-Beast: a greedy green demon-beast with many grasping hands, each hand snatching stolen light, its shape half-mimicking other beings, its face full of longing and resentment.
```

### 6. beast6 → `images/beast6.png`

```
Subject: The Wrath-Flame: a raging bull-demon made of fire and molten lava, flames flaring higher with its fury, blazing red eyes, breathing fire, charging forward in a violent posture.
```

### 7. beast7 → `images/beast7.png`

```
Subject: The Greed-Wyrm: an enormous dragon coiled atop a mountain of gold, its cavernous maw perpetually gaping to devour, jewels embedded between its scales yet still starving, faint glimmers in the deep cave.
```

### 8. beast8 → `images/beast8.png`

```
Subject: The Regret-Wraith: a translucent, head-bowed weeping ghost, an old wound on its body that keeps splitting open and seeping pale light, drifting broken fragments of the past around it.
```

### 9. beast9 → `images/beast9.png`

```
Subject: The Lonely One: a lonely huddled figure wrapped in a vast spiderweb, surrounded by endless empty darkness with a single faint distant light, cold and estranged.
```

### 10. beast10 → `images/beast10.png`

```
Subject: The Despair-Titan: a colossal, sky-blotting black shadow that endlessly regenerates and cannot be dispersed, heavy and drooping, a dense blackness that swallows the light around it, immensely oppressive.
```

### 11. beast11 → `images/beast11.png`

```
Subject: The Void: a floating sphere and rift of pure black void, its edges warping and devouring everything around it, absolute emptiness at its center, points of starlight being sucked in and vanishing.
```

### 12. beast12 → `images/beast12.png`

```
Subject: The Shadow (the hero's own self): a dark mirror-image identical to the protagonist — the same young hero in a green hooded cloak, but formed entirely of shadow with coldly glowing eyes, standing in confrontation, half in light and half in dark.
```


---

## 放回來 · Installing

檔名要**完全一致**放進 `images/`。若圖外圈有白紙邊、或被畫成羊皮紙上的圓形獎章，先裁掉紙邊再放（或丟給 Claude 代裁）。
Save under the exact filename in `images/`. If a result carries a white paper margin, or is painted as a medallion on parchment, crop to the painted area first (or hand it to Claude).

## 用腳本批次生 · Batch scripts

```bash
export OPENAI_API_KEY="sk-..."          # 只用環境變數，不要寫進檔案
node gen_all.mjs       ./images 1024x1024 medium   # 12 場景
node gen_portraits.mjs ./images 1024x1024 medium   # 9 肖像
node gen_beasts.mjs    ./images 1024x1024 medium   # 12 心魔
node gen_covers.mjs    ./images 1024x1024 high     # 4 封面
```

已存在的檔案一律跳過，不會覆蓋現有美術。
Existing files are always skipped — nothing already in place is overwritten.
