# 弒魔英雄旅 · 十二心魔美術清單 (Beast Art Manifest)

`beast_trials.html` 這個模式需要 **12 張怪物圖**。檔案還沒畫好時，遊戲會自動顯示 emoji 佔位圖（虛線框＋「待繪 art pending」），完全可玩；你把圖畫好、用下面的檔名放進 `images/` 就會自動替換。

## 規格
- 檔名：`images/beast1.png` … `images/beast12.png`（也接受 `.jpg`；若用 jpg，要改 HTML 內對應的副檔名，或直接存成 `.png`）
- 建議尺寸：**1024×1024**（正方形，遊戲裡是圓角方框）
- 風格：與現有場景一致 —— **古典水彩故事繪本、墨線＋水彩、暖土色調、陳舊羊皮紙感、電影感柔光**；主體置中、背景簡單、**畫面裡不要有任何文字**。
- 每頭心魔對應一個坎伯階段，也對應一種「內在的自己」。以下描述可直接當生圖 prompt。

---

## 一次複製給 Gemini · One block to paste into Gemini

> 貼上後可請它「逐一生成，每張 1024×1024 正方形」/ Paste and ask it to "generate each one, 1024×1024 square."

```
A cohesive set of 12 square (1024x1024) monster illustrations for a hero's "inner demons" game. Shared style for all: antique fantasy storybook illustration, ink and watercolor, warm earthy muted tones, aged parchment feel, painterly and detailed, cinematic soft lighting. A single ominous creature centered in the frame against a simple dark background. NO text, NO words, NO letters anywhere. Generate them one by one:

1. sloth — The Shade of Sloth: a sluggish, heavy shadow-creature, half-melted and slumped across soft bedding and piled pillows, thick and tar-like, half-closed drowsy eyes, wreathed in a warm but drowning mist.

2. dread — The Dread: a bodiless phantom of fear, a churning mass of grey-black smoke condensing into a vague menacing face with hollow glowing eyes, the smoke trailing off into many reaching hands, cold and oppressive.

3. doubt — The Doubt-Serpent: a coiling dark-green serpent whose scales reflect fractured mirror-images, a forked tongue, sly bewitching eyes, its body wound around a single softly glowing heart.

4. pride — The Pride-Colossus: a towering colossus in mirror-smooth metal armor, head held high and looking down with arrogance, its polished mirror armor faintly reflecting the viewer's own figure.

5. envy — The Envy-Beast: a greedy green demon-beast with many grasping hands, each hand snatching stolen light, its shape half-mimicking other beings, its face full of longing and resentment.

6. wrath — The Wrath-Flame: a raging bull-demon made of fire and molten lava, flames flaring higher with its fury, blazing red eyes, breathing fire, charging forward in a violent posture.

7. greed — The Greed-Wyrm: an enormous dragon coiled atop a mountain of gold, its cavernous maw perpetually gaping to devour, jewels embedded between its scales yet still starving, faint glimmers in the deep cave.

8. regret — The Regret-Wraith: a translucent, head-bowed weeping ghost, an old wound on its body that keeps splitting open and seeping pale light, drifting broken fragments of the past around it.

9. loneliness — The Lonely One: a lonely huddled figure wrapped in a vast spiderweb, surrounded by endless empty darkness with a single faint distant light, cold and estranged.

10. despair — The Despair-Titan: a colossal, sky-blotting black shadow that endlessly regenerates and cannot be dispersed, heavy and drooping, a dense blackness that swallows the light around it, immensely oppressive.

11. void — The Void: a floating sphere and rift of pure black void, its edges warping and devouring everything around it, absolute emptiness at its center, points of starlight being sucked in and vanishing.

12. shadow — The Shadow (the hero's own self): a dark mirror-image identical to the protagonist — the same young hero in a green hooded cloak, but formed entirely of shadow with coldly glowing eyes, standing in confrontation, half in light and half in dark.
```

生好後用下表的檔名（`beast1.png … beast12.png`，順序同上）放進 `images/` 即可。
Save with the filenames below (`beast1.png … beast12.png`, same order) into `images/`.

---

| 檔名 | 名稱 | 代表 | 佔位 | 形象描述（可作繪圖 prompt） |
|---|---|---|---|---|
| `beast1.png` | 惰影 The Shade of Sloth | 惰・平凡的牢籠 | 😴 | 一團慵懶沉重的暗影生物，半融化般癱在柔軟的床榻與枕堆上，濃稠如焦油，眼神半闔、昏昏欲睡；周身散發溫暖卻令人沉溺的霧氣。 |
| `beast2.png` | 懼魔 The Dread | 懼・拒絕召喚 | 😱 | 無實體的恐懼幽靈，一團翻騰的灰黑煙霧凝成模糊的猙獰臉孔，空洞發光的雙眼，煙霧化為無數伸出的手，冰冷、壓迫。 |
| `beast3.png` | 惑蛇 The Doubt-Serpent | 惑・內心的懷疑 | 🐍 | 一條盤繞的暗綠巨蛇，鱗片上映出破碎的鏡像倒影，分叉的信子，眼神狡黠魅惑，身體纏繞著一顆發光的心。 |
| `beast4.png` | 傲魔巨像 The Pride-Colossus | 傲・拒絕受教 | 🗿 | 一尊高大的鏡面盔甲巨像，全身金屬光滑如鏡，頭顱高昂俯視，姿態傲慢，鏡甲反射出攻擊者自己的身影。 |
| `beast5.png` | 妒獸 The Envy-Beast | 妒・試煉與盟友 | 👺 | 一頭貪婪的綠色妖獸，長著許多隻手，每隻手都在攫取別人的光；身形會模仿他人，臉上是渴望與不甘。 |
| `beast6.png` | 怒炎 The Wrath-Flame | 怒・逼近核心 | 🔥 | 一頭由烈焰與熔岩構成的公牛／魔獸，越憤怒火焰越暴漲，赤紅雙眼，鼻息噴火，姿態狂暴前衝。 |
| `beast7.png` | 貪淵龍 The Greed-Wyrm | 貪・洞穴最深處 | 🐲 | 一條盤踞在金山上的巨龍，血盆大口永遠張著要吞噬，鱗甲間嵌滿珠寶卻仍飢餓，深洞裡幽光閃爍。 |
| `beast8.png` | 悔靈 The Regret-Wraith | 悔・磨難 | 👻 | 一個半透明、垂首哭泣的幽靈，身上有一道不斷裂開又滲光的舊傷口，飄浮著破碎的往日殘影。 |
| `beast9.png` | 孤魘 The Lonely One | 孤・獨自面對 | 🕸️ | 一個被巨大蛛網包裹、蜷縮的孤獨身影，四周是無盡的空曠黑暗，只有一點微光；冷清、疏離。 |
| `beast10.png` | 絕望巨影 The Despair-Titan | 絕望・歸途最暗處 | 🌑 | 一頭遮天蔽日的黑色巨影，形體不斷再生、無法被真正打散，低垂沉重，散發吞噬光線的濃黑，壓迫感極強。 |
| `beast11.png` | 虛無 The Void | 虛無・意義的崩塌 | ⚫ | 一個懸浮的純黑虛空球體／裂縫，邊緣扭曲吞噬周圍的一切，中心是絕對的空無，星光被吸進去消失。 |
| `beast12.png` | 心魔・你自己 The Shadow (Yourself) | 影・最後的敵人 | 🌓 | 與主角一模一樣的暗色鏡像——同樣的綠斗篷英雄，但由陰影構成、雙眼發著冷光；姿態與主角對峙，半明半暗，象徵光與影的最終合一。 |

---

## 生成腳本
已附 **`gen_beasts.mjs`**（仿 `gen_all.mjs`），內含這 12 頭怪物的英文 prompt，一次輸出 `beast1.png…beast12.png`。需要你自己的 OpenAI 金鑰（只透過環境變數傳入）：

```powershell
$env:OPENAI_API_KEY = "sk-你的金鑰"
node gen_beasts.mjs ./images 1024x1024 medium
```
已存在的檔案會自動跳過。

畫好任何一張，直接丟進 `images/` 覆蓋即可，遊戲會自動用真圖取代佔位 emoji。
