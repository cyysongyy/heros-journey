# 英雄旅程 · The Hero's Journey

坎伯（Joseph Campbell）十二階段的視覺化專案。

## 內容

- `heros_journey_game.html` — **雙語互動遊戲**（中／EN）。12 關依坎伯十二階段順序推進，含史詩敘事、抉擇、屬性養成（勇氣／智慧／心）、即時合成音效與環境氛圍。圖片放在同層的 `images/` 資料夾，**連同該資料夾一起用瀏覽器開啟即可離線遊玩**。
- `index.html` — 英雄旅程網頁（圓環主圖 + 12 階段插圖 + 中英說明）。**直接用瀏覽器開啟即可**。
- `images/` — 圖像資源
  - `00_map.png` — 圓環地圖主圖
  - `01…12_*.png` — 十二階段場景插圖（同一位綠斗篷主角、統一水彩風格）
  - `img16…img34.png` — 對話人物頭像（恩基杜／洪巴巴／阿努比斯／西杜麗／烏塔納匹什提／奧菲斯／導師／旁白／鳳凰）。缺檔時遊戲會自動隱藏頭像，仍可正常對話。
- `gen_all.mjs` — 批次生成全部 12 張場景插圖的腳本
- `gen_portraits.mjs` — 批次生成對話人物頭像的腳本
- `gen_image.mjs` — 生成單張圖片的通用腳本

## 重新生成 / 產生新圖

需要 Node.js 與 OpenAI API 金鑰。金鑰**只透過環境變數**傳入，不要寫進檔案：

```powershell
$env:OPENAI_API_KEY = "sk-你的新金鑰"
```

單張：
```powershell
node gen_image.mjs "你的英文描述 prompt" 1024x1024 images/my.png
```

全部 12 張場景（可指定輸出資料夾／尺寸／品質；已存在的檔案會自動跳過）：
```powershell
node gen_all.mjs ./images 1024x1024 medium
```

對話人物頭像（9 張，檔名對應遊戲 `img16…img34.png`；已存在的檔案會自動跳過）：
```powershell
node gen_portraits.mjs ./images 1024x1024 medium
```

- 尺寸：`1024x1024`（方）、`1024x1536`（直）、`1536x1024`（橫）
- 品質：`low` / `medium` / `high`（越高越貴、越慢）
- 模型：`gpt-image-1`（OpenAI Images API，按張計費，與 ChatGPT 訂閱額度分開）

## 安全提醒

API 金鑰等同密碼。若曾以明碼外流，請至 platform.openai.com → API keys 立即 **revoke 換新**。
