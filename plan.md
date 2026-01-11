# Plan: Jake-like Minimal Site + 客製化年份/Terminal About（給 Claude Haiku 4.5）

> 指令：你是實作 AI。**務必嚴格照 Step 0 → Step 6 順序逐步執行**。  
> 每一步都必須：  
> 1) 只做該步範圍內的改動（不要偷跑下一步）  
> 2) 讓專案 `pnpm dev` 能跑、`pnpm build` 成功  
> 3) 依「驗收標準」自我檢查通過再往下  
> 4) 回報：做了哪些檔案變更、如何驗收（指令+預期畫面/結果）

---

## 技術選型（固定）
- 使用 **Astro** 建置 **純靜態**網站（no server required）
- 套件管理：**pnpm**
- 文章來源：**Markdown**（content collection）

---

## Step 0 — 建立專案與路由骨架（先跑起來）

### 目標
建立可運作的 Astro 靜態網站骨架，並先把路由頁面佔位完成：
- `/`（home）
- `/about`
- `/blog/[year]`
- `/blog/[year]/[slug]`

### 驗收標準
- `pnpm dev` 可開啟首頁與上述路由（至少顯示佔位文字）
- `pnpm build` 成功
- `pnpm preview` 可正常瀏覽

### 實作提示（給實作 AI）
- 建立 Astro 專案（例如 `pnpm create astro@latest`）
- 建 `src/layouts/Layout.astro`（共用版面）
- 建立對應 pages 檔案：  
  - `src/pages/index.astro`  
  - `src/pages/about.astro`  
  - `src/pages/blog/[year]/index.astro`  
  - `src/pages/blog/[year]/[slug].astro`

---

## Step 1 — 內容模型：Markdown 文章 + 年份分組

### 目標
用 Markdown 寫文章，依 frontmatter `date` 分組到年份，並在：
- Home 顯示「年份索引」
- `/blog/[year]` 顯示該年文章列表（依日期新→舊）
- `/blog/[year]/[slug]` 顯示文章內容

### 建議 frontmatter
- `title: string`
- `date: string`（ISO 格式 `YYYY-MM-DD`）
- `description?: string`
- `tags?: string[]`

### 驗收標準
- 至少 3 篇文章、跨 2 個不同年份
- Home 可列出年份（依年份大→小）
- `/blog/2025`（例）可列出該年文章
- 每篇文章 slug 路由可正確渲染 Markdown

### 實作提示（給實作 AI）
- 使用 Astro Content Collections：
  - `src/content/config.ts`
  - `src/content/blog/*.md`
- 實作：year grouping、post sorting、動態路由 `getStaticPaths`
- 保持專案仍為靜態輸出（SSG）

---

## Step 2 — 年份徽章改造：希臘字母 → 中文大寫正體數字（套京華老宋體）

> 需求：只改「年份徽章大字」那一行，**其餘排版與內容不變**（仍保留下方小的阿拉伯數字年份）。

### 2-1 轉換規則（必須精準）
- 2021 → `貳零貳壹`
- 2025 → `貳零貳伍`
- digit map：`0零 1壹 2貳 3參 4肆 5伍 6陸 7柒 8捌 9玖`

### 2-2 字體規格
- 年份徽章大字 font-family 優先：
  - `"京華老宋體"`, `"KingHwa_OldSong"`, `"PMingLiU"`, `"Songti TC"`, `serif`
- 目前先採「使用者系統字體 + fallback」方案（不打包字型檔）

### 驗收標準
- Home 年份徽章大字顯示如 `貳零貳伍`、`貳零貳肆`…
- 下方仍顯示 `2025`、`2024`（阿拉伯數字）
- 專案 build 仍成功

### 實作提示（給實作 AI）
- 新增 helper：`toChineseUpperYear(year: number): string`
- Home 年份徽章元件（或 index.astro）將「大字」改用上述 helper

---

## Step 3 — 顏色系統：低對比點綴色（避免高飽和、刺眼）

> 需求：顏色參考 Jake 年份字母那種「低飽和點綴」，但用 CSS 變數集中管理，方便後續微調。

### 目標
建立全站 CSS 變數：
- 中性色：`--bg`, `--text`, `--muted`, `--border`
- 年份點綴：`--accent-2025`, `--accent-2024`, `--accent-2023`, `--accent-2022`
- 年份徽章大字使用「該年 accent」；其他文字維持中性色系

### 驗收標準
- 全站強調色只來自 CSS 變數（不要散落 hardcode）
- 整體對比舒適，不使用 neon、純飽和亮色
- build 成功

### 實作提示（給實作 AI）
- 建立 `src/styles/global.css`（或既有樣式檔）
- 在 `:root` 定義變數
- 實作一個 `year -> CSS var` 的映射方式（例如 inline style 或 class）
- 保持版面極簡、文字導向

---

## Step 4 — About：Justin 風格的 Terminal 呈現，但配色/排版維持 Jake-like（低對比）

> 需求：呈現形式像 Justin 的 terminal block（prompt + value），  
> 但 **字體、排版、顏色風格必須與 Jake 風格一致**，避免高對比亮色。

### 目標（About Terminal UI）
在 `/about` 顯示一個 terminal 面板，內容格式如下（行距/縮排可微調，但語意一致）：

```
> Justin.location
"San Jose, CA"

> Justin.contact
["j.chi2241@gmail.com", "LinkedIn", "github"]

> Justin.resume
"justinchi.pdf"

> Justin.interests
["design", "basketball", "cooking", "traveling"]

> Justin.education
"B.Sc. Structural Engineering - University of California, San Diego"

> Justin.languages
["Typescript", "React", "Go", "Python"]
```

其中 `justinchi.pdf` 要渲染成可點連結（先用 placeholder 檔案或外部連結皆可）。

### 視覺規格（必須遵守）
- Terminal container：低飽和深色底（灰藍/灰紫系），不要純黑
- 文字：off-white（不是純白）
- 語法色（例如字串、key、prompt）：從 Step 3 的 `--accent-*` 延伸（降低飽和）
- 字體：terminal 內用 monospace；整站可仍維持極簡閱讀風
- 禁止：霓虹綠/霓虹紅、閃爍游標、誇張動畫

### 驗收標準
- `/about` 出現 terminal 面板
- 內容段落/陣列/字串顯示清楚
- 顏色不刺眼，整體對比舒適
- build 成功

### 實作提示（給實作 AI）
- 建立 About terminal component（例如 `src/components/Terminal.astro`）
- CSS 以變數控制顏色：背景、文字、prompt、string、link
- link hover 只做輕微變化

---

## Step 5 — About 終端機內容改為資料驅動（UI 不變）

### 目標
把 About 的 terminal 內容抽到資料檔，避免硬編碼在頁面裡。
- 新增 `src/data/about.ts`（或 JSON）輸出一個結構化資料（blocks/lines）
- `/about` 讀資料檔渲染 UI

### 驗收標準
- About UI 完全不變
- 內容來源改為 `src/data/about.ts`
- build 成功

### 實作提示（給實作 AI）
- 設計資料結構（例如：`{ type: 'prompt'|'value'|'blank', ... }`）
- renderer 依 type 渲染（prompt、string、array、link）

---

## Step 6 — 部署（Cloudflare Pages 或 GitHub Pages，二選一）

### 目標
把 Astro 靜態輸出部署出去，自動 build。

### 選項 A：Cloudflare Pages（建議）
- 設定 build command：`pnpm build`
- output directory：`dist`

### 選項 B：GitHub Pages
- 新增 GitHub Actions workflow（build + publish）
- 確保 base path 與靜態輸出設定正確

### 驗收標準
- 推上 repo 後自動 build
- 網站可公開瀏覽
- 不需要 server

### 實作提示（給實作 AI）
- 產生對應的設定檔（Cloudflare 設定說明或 `.github/workflows/deploy.yml`）
- 若用 GitHub Pages，注意 Astro 的 `site`/`base` 設定

---

## 執行紀律（務必遵守）
- 每個 Step 完成後，回報：
  1) 變更檔案清單
  2) 主要改動摘要
  3) 驗收指令與結果（dev/build/preview）
- 若遇到錯誤：先最小化修復讓該 Step 的驗收標準通過，不要同時做下一步。
