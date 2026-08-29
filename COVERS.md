# 標題封面徽章 — 美術清單 · Title Cover Badges

七件作品的標題畫面各有一枚**圓形封面徽章**。全部是**正方 1024×1024**，會被裁成圓形顯示。
Each piece's title screen carries a **circular cover badge** — always **square 1024×1024**, clipped to a circle.

> **共通規則 / Shared rules**：一次只貼一則、一則生一張；**開新對話**避免延續上一張構圖。
> Paste one prompt per message, one image each; **start a fresh conversation** so it doesn't echo the previous image.

---

## 狀態 · Status

| 模式 / Mode | 檔名 / Filename | 沒圖時 / Fallback | 狀態 |
|---|---|---|---|
| 🏛️ 英雄殿堂 | `images/hall_cover.png` | `img15.png` | ✅ 已完成 |
| 🌀 內在英雄之旅 | `images/inner_cover.png` | 隱藏 | ✅ 已完成 |
| ⛵ 奧德賽 · 內在航程 | `images/odyssey_cover.png` | 隱藏 | ✅ 已完成 |
| 📖 故事模式 | `images/story_cover.png` | `img15.png` | ⬜ 待生成 |
| 🧭 你的英雄旅程 | `images/your_odyssey_cover.png` | `img15.png` | ⬜ 待生成 |
| ⚔️ 弒魔英雄旅 | `images/beast_cover.png` | `img15.png` | ⬜ 待生成 |
| 🃏 英雄牌旅 | `images/deck_cover.png` | 隱藏 | ⬜ 待生成 |

> 待生成的三個（故事／你的旅程／弒魔）目前先顯示共用的英雄肖像 `img15.png`，放進專屬封面就會自動換掉。
> The three pending ones currently show the shared hero portrait; dropping in the dedicated file replaces it automatically.

---

## ⚠️ 常見失敗 · The failure mode to avoid

一次貼多則（或在同一個對話裡連續貼），ChatGPT 會把它們**合成一張**——劍與心魔、卡牌環、門扉、羅盤全擠在同一個畫面。那張不能當任何單一模式的封面。
Pasting several prompts at once (or in one ongoing conversation) makes ChatGPT **merge them into a single image** — sword, demons, card ring, doorways and compass all at once. That composite can't serve as any one mode's cover.

**做法**：**每一則都開一個新對話**，一則一張。
**Fix:** open a **fresh conversation for each prompt**, one image each.

---

## 📖 故事模式 · Story Mode → `images/story_cover.png`

```
Create a square (1024x1024) mythic watercolor illustration. Style: antique fantasy storybook illustration, ink and watercolor, warm earthy muted tones with gold, aged parchment feel, painterly, cinematic soft lighting. NO text, NO lettering, NO words, NO letters anywhere in the image.

IMPORTANT: Output ONE single full-bleed illustration. The painting must run all the way to all four edges — NO white paper margin, NO border, NO frame. This is NOT a storyboard, NOT a comic, NOT a contact sheet — no panels, no captions, no title.

Subject: the emblem of an ancient epic — a lone bearded hero in a hooded green cloak stands at the exact center, seen from behind, facing a vast horizon where twelve faint golden thresholds recede into the distance like doorways of light across a mythic landscape of ziggurats, deserts and stars. A great golden ring encircles the scene. Ancient, legendary, the weight of a story told for four thousand years. Composition centered and balanced, works well cropped into a circle.
```

## 🧭 你的英雄旅程 · Your Own Odyssey → `images/your_odyssey_cover.png`

```
Create a square (1024x1024) symbolic watercolor illustration. Style: dark symbolic watercolor, warm gold and deep teal-blue palette, dreamlike, painterly, personal and reflective, cinematic soft light, aged paper texture. NO text, NO lettering, NO words, NO letters anywhere in the image.

IMPORTANT: Output ONE single full-bleed illustration. The painting must run all the way to all four edges — NO white paper margin, NO border, NO frame. This is NOT a storyboard, NOT a comic, NOT a contact sheet — no panels, no captions, no title.

Subject: the emblem of a personal odyssey — an ordinary present-day person stands at the exact center on a road that begins at their feet and winds outward into a vast mythic landscape, passing twelve faint glowing thresholds arranged around them in a great golden ring. A warm golden compass rose glows softly beneath their feet. The hero is anyone; the road is their own life. Intimate, hopeful, mythic. Composition centered and balanced, works well cropped into a circle.
```

## ⚔️ 弒魔英雄旅 · Trials of the Beasts → `images/beast_cover.png`

```
Create a square (1024x1024) mythic watercolor illustration. Style: antique fantasy storybook illustration, ink and watercolor, warm earthy muted tones with gold and deep crimson shadow, aged parchment feel, painterly, dramatic cinematic lighting. NO text, NO lettering, NO words, NO letters anywhere in the image.

IMPORTANT: Output ONE single full-bleed illustration. The painting must run all the way to all four edges — NO white paper margin, NO border, NO frame. This is NOT a storyboard, NOT a comic, NOT a contact sheet — no panels, no captions, no title.

Subject: the emblem of a war against one's own demons — a lone hero in a green hooded cloak stands at the exact center with a raised glowing sword, encircled by twelve shadowy demon silhouettes that loom out of dark smoke around them (a drowsy sagging shape, a many-handed grasping one, a horned flame-bull, a coiled serpent, a mirror-armored colossus, a formless void). The demons are made of shadow, not gore. A golden ring of light holds them back. Defiant, dramatic, the moment before the first strike. Composition centered and balanced, works well cropped into a circle.
```

## 🃏 英雄牌旅 · The Deckbound Hero → `images/deck_cover.png`

```
Create a square (1024x1024) mythic watercolor illustration. Style: antique fantasy storybook illustration, ink and watercolor, warm gold and deep violet palette, aged parchment feel, painterly, cinematic soft lighting, arcane tarot atmosphere. NO text, NO lettering, NO words, NO letters, NO numbers, NO card pips or suit symbols anywhere in the image.

IMPORTANT: Output ONE single full-bleed illustration. The painting must run all the way to all four edges — NO white paper margin, NO border, NO frame. This is NOT a storyboard, NOT a comic, NOT a contact sheet — no panels, no captions, no title.

Subject: the emblem of a hero whose deck is their sword — a lone cloaked figure stands at the exact center, arms slightly raised, as a fan of glowing golden playing cards sweeps up and around them in a great spiral ring, each card blank and radiant with light, some dissolving into embers and stars. Below, a faint arcane circle glows on dark stone. Magical, strategic, the instant a hand is played. Composition centered and balanced, works well cropped into a circle.
```

---

## 一次複製給 Gemini · One block to paste into Gemini

> 整段複製貼進 Gemini，請它「逐一生成，每張 1024×1024 正方」。
> Paste the whole block and ask Gemini to "generate each one, 1024×1024 square."

```
A set of 4 SEPARATE square (1024x1024) cover emblems for a Hero's Journey game. Generate them ONE BY ONE as four individual images — never combine them into one picture, a grid, or a contact sheet.

RULES FOR EVERY IMAGE:
- ONE single full-bleed illustration filling the whole canvas edge to edge. No white paper margin, no border, no frame, no panels, no captions.
- NO text, NO lettering, NO words, NO letters anywhere.
- Watercolor and ink, painterly, aged parchment feel, cinematic soft lighting.
- The subject is centered and balanced so the image still reads when cropped into a circle.

Generate them one by one:

1. STORY — Palette: warm earthy muted tones with gold. The emblem of an ancient epic: a lone bearded hero in a hooded green cloak stands at the exact center, seen from behind, facing a vast horizon where twelve faint golden thresholds recede into the distance like doorways of light across a mythic landscape of ziggurats, deserts and stars. A great golden ring encircles the scene. Ancient, legendary, the weight of a story told for four thousand years.

2. YOUR OWN ODYSSEY — Palette: warm gold and deep teal-blue, dreamlike and reflective. The emblem of a personal odyssey: an ordinary present-day person stands at the exact center on a road that begins at their feet and winds outward into a vast mythic landscape, passing twelve faint glowing thresholds arranged around them in a great golden ring. A warm golden compass rose glows softly beneath their feet. The hero is anyone; the road is their own life. Intimate, hopeful, mythic.

3. TRIALS OF THE BEASTS — Palette: warm earthy tones with gold and deep crimson shadow, dramatic lighting. The emblem of a war against one's own demons: a lone hero in a green hooded cloak stands at the exact center with a raised glowing sword, encircled by twelve shadowy demon silhouettes looming out of dark smoke around them — a drowsy sagging shape, a many-handed grasping one, a horned flame-bull, a coiled serpent, a mirror-armored colossus, a formless void. The demons are made of shadow, not gore. A golden ring of light holds them back. Defiant, dramatic, the moment before the first strike.

4. THE DECKBOUND HERO — Palette: warm gold and deep violet, arcane tarot atmosphere. No numbers, no card pips, no suit symbols. The emblem of a hero whose deck is their sword: a lone cloaked figure stands at the exact center, arms slightly raised, as a fan of glowing golden playing cards sweeps up and around them in a great spiral ring, each card blank and radiant with light, some dissolving into embers and stars. Below, a faint arcane circle glows on dark stone. Magical, strategic, the instant a hand is played.
```

**依序存成 / Save in order as:**

| 生成順序 | 模式 | 存成檔名 |
|---|---|---|
| 1 | 📖 故事模式 | `images/story_cover.png` |
| 2 | 🧭 你的英雄旅程 | `images/your_odyssey_cover.png` |
| 3 | ⚔️ 弒魔英雄旅 | `images/beast_cover.png` |
| 4 | 🃏 英雄牌旅 | `images/deck_cover.png` |

---

## 用腳本一次生完 · Generate them with one command

需要 Node.js 與你自己的 OpenAI 金鑰；金鑰**只透過環境變數**傳入，不要寫進檔案或 commit。
Needs Node.js and your own OpenAI key, passed **only via an env var** — never put it in a file or a commit.

```bash
export OPENAI_API_KEY="sk-..."
node gen_covers.mjs ./images 1024x1024 high
```

已存在的檔案會自動跳過，所以已完成的三張（hall／inner／odyssey）不會被覆蓋。
Existing files are skipped, so the three finished covers are never overwritten.

---

## 放回來 · Installing

檔名要**完全一致**放進 `images/`。若圖外圈有白色紙邊或畫成圓形獎章，先裁掉紙邊再放（或丟給 Claude 代裁）。
Save under the exact filename in `images/`. If the result carries a white paper margin or is painted as a medallion on parchment, crop to the painted area first (or hand it to Claude to crop).
