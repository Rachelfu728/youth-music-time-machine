# 《青春音樂時光機》Web App (MVP)

> **「青春沒有消失，只是有些歌很久沒播放了。」**

為喜愛 1970～1990 年代經典歌曲樂迷量身打造的私人音樂回憶工具與人生音樂手記。

---

## 🎵 核心產品定位與版權宣告

1. **純粹合法的回憶與探索載體**：
   - 本 App 絕不儲存、下載、轉檔、擷取或自行串流任何受版權保護之音訊。
   - 所有完整歌曲播放，均以乾淨、透明的深度搜尋連結引導至合法的官方音樂平台（**YouTube**、**Spotify**、**Apple Music**），支持正版音樂創作者與版權方。
2. **核心使用旅程**：
   `回憶歌曲 → 發現歌曲 → 珍藏歌單 → 記下時光日記 → 前往合法官方平台聆聽`

---

## 🌟 核心功能一覽

### 1. 🏠 首頁時光機
- **經典年代大按鈕**：`1970s`（純真民歌・黑膠）、`1980s`（卡帶歲月・黃金）、`1990s`（CD盛世・巔峰）。
- **語系與最愛快速切換**：華語經典、西洋經典、我的最愛 ❤️。
- **六大心情選歌情境**：
  - ☕ 下午想安靜一下
  - ❤️ 想起以前的自己
  - 🌙 有一點想念
  - 🚗 開車聽
  - 🏠 做家事聽
  - 😊 今天心情很好
- **時光歌手入口**：
  - 西洋：Carpenters, Rod Stewart, Bee Gees, Eagles, Michael Jackson, Whitney Houston, Air Supply, Céline Dion
  - 華語：蔡琴, 陳淑樺, 鄧麗君, 羅大佑, 張學友, 王菲, 張雨生, 鳳飛飛
  - *採用純 CSS/SVG 幾何同心圓黑膠唱片與年代色彩標籤，不使用未經授權之肖像或專輯照片。*

### 2. 🎵 找歌曲與智慧檢索
- 支援歌手、曲名、發行年代、歌詞關鍵字即時檢索。
- **無結果時的官方串流備案**：若資料庫尚未收錄該曲目，下方自動提供「到 YouTube 搜尋」、「到 Spotify 搜尋」、「到 Apple Music 搜尋」專屬按鈕，隨時隨地滿足樂迷的探索渴望。

### 3. ❤️ 我的青春歌單（Local Storage）
- 點擊卡片愛心圖示即可收藏，無需註冊或登入。
- 資料完整儲存於使用者的瀏覽器 `localStorage`，兼顧隱私與便利。
- 支援「全部收藏、華語、西洋、1970s、1980s、1990s」多維度篩選。

### 4. 📖 我的音樂回憶（人生音樂日記）
- 每首歌曲卡片附帶 **「✍️ 這首歌讓我想到……」**。
- 提供情境靈感標籤（例：「第一次去英國時常常聽」「以前開車時很喜歡這首」「這是我和家人的回憶」）。
- 底部專屬 **「📖 我的回憶」** 頁籤，以時光手記雜誌風格展示個人的歲月心情與記錄日期，亦可隨時編輯或刪除。

### 5. 📱 手機優先設計（Mobile-First）
- 底部固定導覽列（時光機、找歌曲、我的最愛、我的回憶），大觸控目標與觸覺回饋手感。
- 電腦瀏覽時預設以精緻的行動裝置外框展示，右下角提供「寬螢幕全覽 / 手機比例」一鍵切換按鈕。

---

## 🎨 視覺風格系統

- **主題概念**：「高級復古 × 現代數位」— 兼具老黑膠的典雅溫度與現代串流應用的流暢俐落。
- **色彩規劃**：
  - 主背景色：**奶油米白** (`#FBF6EC`)
  - 品牌主色：**深綠墨色** (`#23412F`)
  - 質感點綴：**淡金色** (`#C9A86A`)
  - 情感點綴：**酒紅** (`#8A2538`)、**霧灰藍** (`#486175`)
- **字體搭配**：Noto Serif TC 襯線體 + Noto Sans TC + Cinzel 英文字。

---

## 📂 檔案目錄架構

```
youth-music-time-machine/
├── index.html          # 主頁面結構、PWA 宣告標籤、底部導覽與彈窗
├── manifest.json       # PWA 應用程式清單（名稱、色調、獨立視窗與圖示）
├── sw.js               # Service Worker 快取與離線加載支援
├── icons/              # 官方 App Icon 完整尺寸支援
│   ├── icon-192.png            # Android PWA 標記尺寸 (192x192)
│   ├── icon-512.png            # PWA 高解析與啟動畫面 (512x512)
│   ├── apple-touch-icon.png     # iOS Safari 主畫面圖示 (180x180)
│   ├── apple-touch-icon-180.png # iOS 備用圖示規格
│   └── favicon.png             # 瀏覽器分頁標籤圖示 (64x64)
├── css/
│   └── style.css       # 高級復古配色、黑膠唱片旋轉質感、響應式佈局
├── js/
│   ├── data.js         # 歌曲庫與歌手資料庫（易於擴充結構）
│   └── app.js          # 核心互動邏輯、LocalStorage 狀態管理、導覽與搜尋
└── README.md           # 產品與技術說明文件
```

---

## 📲 PWA 手機安裝支援

本專案已完整支援現代行動裝置 PWA 規範：
- **iPhone / iPad (Safari)**：點擊瀏覽器下方「分享」按鈕 ➔ 選擇「加入主畫面」。
- **Android (Chrome)**：點擊右上角三點選單 ➔ 選擇「安裝應用程式」或「加到主螢幕」。
- 安裝後將以 **獨立 App 視窗（Standalone）** 啟動，移除網址列與瀏覽器按鈕，沉浸感與原生 App 一致。

---

## 🌐 下一步：如何部署到 HTTPS 網址？

PWA 規範中，手機安裝必須在 **HTTPS 安全協定** 網址下運行（本機除 `localhost` 外皆需 HTTPS）。
以下為 4 種最簡單且完全免費的部署方式：

### 方式一：GitHub Pages（推薦，最穩定）
1. 在 GitHub 建立一個公開或私人 Repository（例如 `youth-music-time-machine`）。
2. 將本專案資料夾內的所有檔案上傳或 Push 至該 Repo。
3. 進入 Repo 的 **Settings ➔ Pages**。
4. 在 **Build and deployment** 下的 Source 選擇 `Deploy from a branch`，Branch 選擇 `main` / `root` 並儲存。
5. 幾秒內即可取得免費且具備 HTTPS 綠色鎖頭的官方網址（例如：`https://yourname.github.io/youth-music-time-machine/`）。

### 方式二：Vercel（最迅速，免指令）
1. 前往 [vercel.com](https://vercel.com/) 免費註冊登入。
2. 點擊 **Add New Project**，連結 GitHub Repo 或直接拖曳資料夾上傳。
3. 點擊 **Deploy**，30 秒內即可自動配置全球 CDN 與專屬 HTTPS 網址。

### 方式三：Netlify
1. 前往 [netlify.com](https://www.netlify.com/) 登入。
2. 直接將此資料夾拖放至 Netlify Drop 區塊。
3. 立即獲得隨機 HTTPS 網址，並可自由綁定自訂網域。

---

## 🛠️ 如何新增更多歌手與歌曲？

開啟 `js/data.js`：

### 新增歌手：
```javascript
{
  id: 'unique-artist-id',
  name: '歌手姓名',
  category: 'mandarin', // 或 'western'
  decade: '1980s',
  bio: '歌手簡介...',
  signatureTracks: ['經典歌曲A', '經典歌曲B'],
  badgeStyle: 'ruby' // 可選 'emerald', 'ruby', 'amber', 'navy'
}
```

### 新增歌曲：
```javascript
{
  id: 's41',
  title: '歌曲名稱',
  artist: '歌手姓名',
  artistId: 'unique-artist-id',
  decade: '1980s',
  year: '1985',
  category: 'mandarin', // 'mandarin' 或 'western'
  moods: ['driving', 'good_mood'], // 對應 MOODS 中的 ID
  quote: '經典歌詞或感動人心的引言。',
  albumNote: '背景故事或專輯備註。'
}
```

---

## 🚀 如何立即執行？

1. 直接以任何現代瀏覽器（Chrome, Edge, Safari, Firefox）開啟 `index.html` 即可完整體驗。
2. 或在專案目錄下透過任何 HTTP 伺服器啟動：
   ```bash
   npx serve .
   # 或
   python -m http.server 8080
   ```
