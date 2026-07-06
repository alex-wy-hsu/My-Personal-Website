<!-- 注意：所有規格、計畫與對使用者的文件必須以繁體中文（zh-TW）撰寫。 -->
# 規格說明：複製 Figma 個人作品集網站

**Feature Branch**: `005-figma-site-clone`  
**Created**: 2025-01-22  
**Status**: Draft  
**Input**: 複製 Figma 作品集網站 https://ice-turn-79703411.figma.site/，完整重現其版面配置、樣式與滑鼠互動視覺效果

## 使用情境與測試 *(mandatory)*

### 使用情境 1 - 首頁瀏覽與導航 (Priority: P1) 🎯 MVP

作為訪客，我希望看到與原始 Figma 網站完全一致的首頁，包含個人簡介區塊、終端機風格區塊、導航連結與社群媒體連結。

**為何此優先順序**：首頁是網站的核心入口，必須首先完成才能展示其他功能。

**獨立測試**：開啟首頁，確認版面與 https://ice-turn-79703411.figma.site/ 視覺一致

**驗收條件**：

1. **Given** 訪客開啟網站首頁, **When** 頁面載入完成, **Then** 顯示「Your Name」標題、「Full Stack Developer · San Francisco, CA」副標題
2. **Given** 訪客在首頁, **When** 檢視終端機區塊, **Then** 顯示 `$ whoami`、`$ cat location.txt`、`$ cat role.txt`、`$ ls skills/` 等命令與輸出
3. **Given** 訪客在首頁, **When** 點擊「projects →」連結, **Then** 導航至 /projects 頁面
4. **Given** 訪客在首頁, **When** 點擊「blog →」連結, **Then** 導航至 /blog 頁面
5. **Given** 訪客在首頁, **When** 檢視社群連結, **Then** 顯示 GitHub、LinkedIn 與 Email 圖示連結

---

### 使用情境 2 - 專案頁面瀏覽 (Priority: P1)

作為訪客，我希望在專案頁面看到所有專案卡片，每張卡片包含標題、年份、描述與技術標籤。

**為何此優先順序**：專案頁是作品集的核心內容，展示開發者能力。

**獨立測試**：開啟 /projects 頁面，確認 6 個專案卡片完整顯示

**驗收條件**：

1. **Given** 訪客在專案頁面, **When** 頁面載入完成, **Then** 顯示「Projects」標題與「Back」返回連結
2. **Given** 訪客在專案頁面, **When** 檢視專案列表, **Then** 顯示 6 個專案（Project Alpha, Beta, Gamma, Delta, Epsilon, Zeta）
3. **Given** 訪客檢視專案卡片, **When** 查看內容, **Then** 每張卡片包含：標題、年份（2022-2024）、描述、技術標籤

---

### 使用情境 3 - 部落格頁面瀏覽 (Priority: P2)

作為訪客，我希望在部落格頁面看到文章卡片列表，風格與專案頁一致。

**為何此優先順序**：部落格為次要內容，可在核心功能完成後實作。

**獨立測試**：開啟 /blog 頁面，確認文章卡片完整顯示

**驗收條件**：

1. **Given** 訪客在部落格頁面, **When** 頁面載入完成, **Then** 顯示「Blog」標題與「Back」返回連結
2. **Given** 訪客在部落格頁面, **When** 檢視文章列表, **Then** 顯示 3 篇文章卡片，每張卡片包含標題、濃縮說明、右上角年份
3. **Given** 訪客在部落格頁面, **When** 滑鼠懸停於文章卡片, **Then** 卡片顯示與專案卡片相同的懸停效果

---

### 使用情境 4 - 滑鼠懸停視覺效果 (Priority: P1)

作為訪客，我希望在滑鼠移至互動元素時看到視覺回饋效果。

**為何此優先順序**：懸停效果是 UI 品質的關鍵指標，必須完整實作。

**獨立測試**：在各頁面將滑鼠移至卡片、連結、按鈕上，確認懸停效果觸發

**驗收條件**：

1. **Given** 訪客在首頁, **When** 滑鼠懸停於「projects →」連結, **Then** 連結顯示懸停樣式（底線、顏色變化或位移效果）
2. **Given** 訪客在專案頁面, **When** 滑鼠懸停於專案卡片, **Then** 卡片顯示懸停效果（陰影加深、放大或邊框變化）
3. **Given** 訪客在首頁, **When** 滑鼠懸停於社群圖示, **Then** 圖示顯示懸停效果（顏色變化或縮放）
4. **Given** 訪客在終端機區塊, **When** 滑鼠懸停, **Then** 終端機顯示懸停效果（發光或邊框變化）

---

### 使用情境 5 - 響應式設計與無障礙 (Priority: P3)

作為使用鍵盤或行動裝置的訪客，我希望網站在各種裝置上正常運作。

**為何此優先順序**：響應式與無障礙為進階需求，可在基本功能完成後優化。

**獨立測試**：使用 Tab 鍵導航全站，確認 focus 樣式可見

**驗收條件**：

1. **Given** 訪客使用鍵盤, **When** 按 Tab 鍵, **Then** 所有互動元素可被 focus 並顯示明顯的 focus 樣式
2. **Given** 訪客使用手機尺寸視窗, **When** 瀏覽各頁面, **Then** 版面自動調整，內容不會溢出或重疊

---

### 邊界情況

- 無 JavaScript 環境：頁面應仍可閱讀（漸進增強）
- 慢速網路：圖片/資源應有 fallback 或 loading 狀態
- 深色模式切換：頁面右上角提供切換按鈕，預設淺色模式，icon 風格與社群連結一致

## 功能需求 *(mandatory)*

### 版面結構

- **FR-001**: 首頁必須包含：主標題區（名稱、職稱、地點）、導航連結區（projects、blog）、終端機區塊、社群連結區
- **FR-002**: 專案頁面必須包含：返回首頁連結、「Projects」標題、6 張專案卡片網格
- **FR-003**: 部落格頁面必須包含：返回首頁連結、「Blog」標題、文章卡片網格（風格與 Projects 一致）
- **FR-003a**: 部落格卡片包含：標題、一行濃縮說明、右上角年份
- **FR-003b**: 部落格卡片懸停效果與專案卡片一致（提升、陰影變化）
- **FR-003c**: 取消年份篩選標籤設計

### 樣式規格

- **FR-004**: 背景顏色為白色（#ffffff），主要文字為黑色（#000000）
- **FR-005**: 強調色/連結色為紫藍色（#4d49fc）
- **FR-006**: 終端機區塊背景為黑色（#000000），文字為白色（#ffffff）搭配語法高亮顏色
- **FR-007**: 字體使用系統字體堆疊（-apple-system, BlinkMacSystemFont, Segoe UI 等）
- **FR-008**: 內容區域最大寬度約 1008px，置中對齊
- **FR-009**: 卡片圓角約 8px，具有邊框或陰影
- **FR-009a**: 專案卡片本身不可點擊（無導航功能）
- **FR-009b**: 每張專案卡片在技術標籤下方顯示兩個按鈕：「Live Demo」與「GitHub」
- **FR-009c**: 按鈕格式為文字在前、icon 在後（例：Live Demo ↗、GitHub ）
- **FR-009d**: 按鈕連結暫為佔位符（#），後續再補上實際網址

### 深色模式切換

- **FR-017**: 頁面右上角必須顯示模式切換按鈕（僅 icon，無文字）
- **FR-018**: 預設為淺色模式；使用者點擊按鈕可切換淺色/深色模式
- **FR-019**: 淺色模式時 icon 顯示太陽圖示；深色模式時 icon 顯示半月形月亮圖示
- **FR-020**: 切換按鈕 icon 風格必須與首頁下方社群連結（GitHub、LinkedIn 等）一致
- **FR-021**: 深色模式需自行設計配色方案，確保可讀性與視覺協調

### 互動效果

- **FR-010**: 連結懸停時必須有視覺回饋（顏色變化、底線、位移）
- **FR-011**: 專案卡片懸停時必須有提升效果（transform: translateY 或 scale）與陰影變化
- **FR-012**: 終端機區塊懸停時必須有發光效果（box-shadow 發光）
- **FR-013**: 社群圖示懸停時必須有縮放或顏色變化
- **FR-014**: 所有動畫過渡時間在 0.2s-0.3s 範圍內

### 資料結構

- **FR-015**: 專案資料包含：id、title、year、description、tags[]
- **FR-016**: 部落格文章資料包含：id、title、date、year

### 關鍵實體

- **Project**: { id, title, year, description, tags: string[], demoUrl?: string, githubUrl?: string }
- **BlogPost**: { id, title, summary, year }
- **SocialLink**: { platform, url, icon }
  - GitHub: https://github.com/alex-wy-hsu
  - LinkedIn: https://www.linkedin.com/in/weiyuanhsu
  - Email: mailto:alex.wy.hsu@gmail.com

## Clarifications

### Session 2026-01-22

- Q: 視覺一致性驗證標準為何？ → A: SSIM ≥ 0.90 搭配人工審查雙重驗證
- Q: 是否支援深色模式？ → A: 支援，右上角 icon 按鈕切換（太陽/月亮），風格與社群連結一致
- Q: 專案卡片點擊行為為何？ → A: 卡片不可點擊，技術標籤下方新增 Live Demo 與 GitHub 按鈕（文字+icon）
- Q: 部落格年份篩選行為為何？ → A: 取消年份篩選，改為卡片式設計（標題、濃縮說明、右上角年份），風格與 Projects 一致
- Q: 社群連結網址為何？ → A: 保留 GitHub（github.com/alex-wy-hsu）、LinkedIn（linkedin.com/in/weiyuanhsu）與 Email（alex.wy.hsu@gmail.com）

## 成功準則 *(mandatory)*

### 可衡量成果

- **SC-001**: 首頁版面與原始 Figma 網站視覺一致（SSIM ≥ 0.90 且人工審查通過）
- **SC-002**: 專案頁面顯示完整 6 個專案，每個專案包含所有必要欄位
- **SC-003**: 所有懸停效果在滑鼠移入 300ms 內觸發並完成過渡
- **SC-004**: 網站在 Chrome、Firefox、Edge 最新版本中表現一致
- **SC-005**: 鍵盤導航可存取所有互動元素（Tab 順序合理、focus 樣式可見）
- **SC-006**: 頁面首次載入在 3 秒內完成（不含網路延遲）

## 假設

- 原始 Figma 網站 https://ice-turn-79703411.figma.site/ 為設計權威參考
- 所有內容（文字、連結）可使用與原網站相同的佔位資料
- 社群連結保留 GitHub、LinkedIn 與 Email，使用實際網址
- 無需後端 API，所有資料以靜態 JSON 或內嵌方式提供

## 交付項目

- 完整前端程式碼（HTML、CSS、JavaScript）
- 首頁（index.html）、專案頁（projects.html）、部落格頁（blog.html）
- 樣式檔案（main.css、projects.css、blog.css）
- 資料檔案（projects.json、posts.json）
- 說明文件（README.md 含本地執行指示）

## 下一步建議

1. 實作首頁版面與樣式（P1 MVP）
2. 實作專案頁面與卡片懸停效果（P1）
3. 實作部落格頁面（P2）
4. 細緻調整懸停動畫與過渡效果（P1）
5. 響應式與無障礙優化（P3）
