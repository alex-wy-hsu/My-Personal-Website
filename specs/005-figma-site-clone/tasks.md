<!-- 注意：所有規格、計畫與對使用者的文件必須以繁體中文（zh-TW）撰寫。 -->
# Tasks: 複製 Figma 個人作品集網站

**Input**: 來自 `/specs/005-figma-site-clone/` 的設計文件  
**Prerequisites**: plan.md、spec.md、research.md、data-model.md、contracts/openapi.yaml、quickstart.md

**測試說明**: 本功能使用視覺比對（SSIM）測試，非傳統單元測試。視覺測試會在各階段檢查點執行。

**組織方式**: 任務按使用情境（User Story）分組，以便獨立實作與測試。

## 格式說明：`[ID] [P?] [Story?] 描述`

- **[P]**: 可平行執行（不同檔案、無相依）
- **[Story]**: 所屬使用情境（US1、US2、US3 等）
- 描述需包含確切檔案路徑

## 路徑慣例

依據 plan.md 結構：
- 前端原始碼：`frontend/src/`
- 視覺測試：`tests/visual/`

---

## Phase 1: Setup（共用基礎建設）

**目的**：專案初始化與基礎結構調整

- [x] T001 建立 CSS 變數架構以支援深淺色模式於 `frontend/src/styles/theme.css`
- [x] T002 [P] 建立部落格資料檔案 `frontend/src/data/posts.json`（3 篇文章）
- [x] T003 [P] 更新專案資料檔案 `frontend/src/data/projects.json`（補齊 demoUrl/githubUrl 欄位）
- [x] T004 [P] 建立部落格頁面檔案 `frontend/src/pages/blog.html`（空殼結構）

---

## Phase 2: Foundational（阻擋性前置作業）

**目的**：所有使用情境共用的核心基礎建設，必須先完成

**⚠️ 重要**：此階段完成前，不可開始任何使用情境工作

- [x] T005 建立主題切換 JavaScript 模組 `frontend/src/components/ThemeToggle.js`
- [x] T006 在 `frontend/src/styles/main.css` 引入 theme.css 並設定 CSS 變數架構
- [x] T007 [P] 建立部落格卡片元件 `frontend/src/components/BlogCard.js`
- [x] T008 設計深色模式配色方案並加入 `frontend/src/styles/theme.css`

**檢查點**：基礎建設就緒，可開始各使用情境平行實作

---

## Phase 3: User Story 1 - 首頁瀏覽與導航 (Priority: P1) 🎯 MVP

**目標**：實作與 Figma 參考網站視覺一致的首頁，包含個人簡介、終端機區塊、導航連結與社群連結

**獨立測試**：開啟首頁，確認版面與 https://ice-turn-79703411.figma.site/ 視覺一致（SSIM ≥ 0.90）

### 實作 User Story 1

- [x] T009 [US1] 重構首頁 HTML 結構，移除 header/footer 傳統導航，改為 Figma 風格版面於 `frontend/src/index.html`
- [x] T010 [US1] 加入主標題區（名稱、職稱、地點）於 `frontend/src/index.html`
- [x] T011 [US1] 加入導航連結區（projects →、blog →）於 `frontend/src/index.html`
- [x] T012 [US1] 更新終端機區塊內容（whoami、cat location.txt、cat role.txt、ls skills/）於 `frontend/src/index.html`
- [x] T013 [P] [US1] 加入社群連結區（GitHub、LinkedIn、Email 圖示）於 `frontend/src/index.html`
- [x] T014 [P] [US1] 建立社群連結樣式於 `frontend/src/styles/main.css`
- [x] T015 [US1] 加入深色模式切換按鈕（右上角）於 `frontend/src/index.html`
- [x] T016 [US1] 整合 ThemeToggle.js 至首頁於 `frontend/src/index.html`
- [x] T017 [US1] 調整首頁整體樣式以符合 Figma 參考（間距、字體大小、配色）於 `frontend/src/styles/main.css`

**檢查點**：首頁應可獨立運作並通過視覺比對測試

---

## Phase 4: User Story 2 - 專案頁面瀏覽 (Priority: P1)

**目標**：實作專案頁面，顯示 6 張專案卡片，含標題、年份、描述、技術標籤與 Live Demo/GitHub 按鈕

**獨立測試**：開啟 /pages/projects.html，確認 6 個專案卡片完整顯示

### 實作 User Story 2

- [ ] T018 [US2] 重構專案頁 HTML 結構，加入 Back 連結與 Projects 標題於 `frontend/src/pages/projects.html`
- [ ] T019 [P] [US2] 更新 ProjectCard.js 元件，加入 Live Demo 與 GitHub 按鈕於 `frontend/src/components/ProjectCard.js`
- [ ] T020 [US2] 加入專案卡片按鈕樣式（文字+icon 格式）於 `frontend/src/styles/projects.css`
- [ ] T021 [US2] 加入深色模式切換按鈕至專案頁於 `frontend/src/pages/projects.html`
- [ ] T022 [US2] 整合 ThemeToggle.js 至專案頁於 `frontend/src/pages/projects.html`
- [ ] T023 [US2] 調整專案頁整體樣式以符合 Figma 參考於 `frontend/src/styles/projects.css`

**檢查點**：專案頁應可獨立運作並通過視覺比對測試

---

## Phase 5: User Story 3 - 部落格頁面瀏覽 (Priority: P2)

**目標**：實作部落格頁面，顯示 3 張文章卡片，風格與專案頁一致

**獨立測試**：開啟 /pages/blog.html，確認 3 篇文章卡片完整顯示

### 實作 User Story 3

- [ ] T024 [US3] 完成部落格頁 HTML 結構（Back 連結、Blog 標題、卡片網格）於 `frontend/src/pages/blog.html`
- [ ] T025 [P] [US3] 建立部落格頁樣式檔案 `frontend/src/styles/blog.css`
- [ ] T026 [US3] 實作部落格卡片渲染邏輯於 `frontend/src/pages/blog.html`
- [ ] T027 [US3] 加入深色模式切換按鈕至部落格頁於 `frontend/src/pages/blog.html`
- [ ] T028 [US3] 整合 ThemeToggle.js 至部落格頁於 `frontend/src/pages/blog.html`

**檢查點**：部落格頁應可獨立運作

---

## Phase 6: User Story 4 - 滑鼠懸停視覺效果 (Priority: P1)

**目標**：實作所有互動元素的懸停視覺回饋效果

**獨立測試**：在各頁面將滑鼠移至卡片、連結、按鈕上，確認懸停效果觸發

### 實作 User Story 4

- [ ] T029 [P] [US4] 實作導航連結懸停效果（底線、顏色變化）於 `frontend/src/styles/main.css`
- [ ] T030 [P] [US4] 強化專案卡片懸停效果（translateY、陰影加深）於 `frontend/src/styles/projects.css`
- [ ] T031 [P] [US4] 實作社群圖示懸停效果（縮放、顏色變化）於 `frontend/src/styles/main.css`
- [ ] T032 [P] [US4] 強化終端機區塊懸停發光效果於 `frontend/src/styles/main.css`
- [ ] T033 [P] [US4] 實作部落格卡片懸停效果（與專案卡片一致）於 `frontend/src/styles/blog.css`
- [ ] T034 [US4] 確保所有過渡時間在 0.2s-0.3s 範圍內，檢查並統一於各樣式檔案

**檢查點**：所有懸停效果應在 300ms 內完成過渡

---

## Phase 7: User Story 5 - 響應式設計與無障礙 (Priority: P3)

**目標**：確保網站在各種裝置上正常運作，並支援鍵盤導航

**獨立測試**：使用 Tab 鍵導航全站，確認 focus 樣式可見

### 實作 User Story 5

- [ ] T035 [P] [US5] 加入響應式斷點樣式（手機/平板）於 `frontend/src/styles/main.css`
- [ ] T036 [P] [US5] 加入響應式斷點樣式於 `frontend/src/styles/projects.css`
- [ ] T037 [P] [US5] 加入響應式斷點樣式於 `frontend/src/styles/blog.css`
- [ ] T038 [P] [US5] 確保所有互動元素具有 focus-visible 樣式於 `frontend/src/styles/a11y.css`
- [ ] T039 [P] [US5] 加入 prefers-reduced-motion 支援於各樣式檔案
- [ ] T040 [US5] 驗證 Tab 順序合理性並調整 tabindex（如需要）於各 HTML 檔案

**檢查點**：網站應在手機尺寸下正常顯示，鍵盤可完整導航

---

## Phase 8: Polish 與跨領域事項

**目的**：影響多個使用情境的改進

- [ ] T041 [P] 更新 README.md 加入本地執行指示
- [ ] T042 [P] 更新視覺測試基準圖（如需要）於 `figma-site-snapshots/`
- [ ] T043 執行 quickstart.md 驗證流程
- [ ] T044 跨瀏覽器測試（Chrome、Firefox、Edge）
- [ ] T045 程式碼清理與最終檢查

---

## 相依性與執行順序

### 階段相依性

- **Setup (Phase 1)**: 無相依，可立即開始
- **Foundational (Phase 2)**: 相依於 Setup 完成，**阻擋所有使用情境**
- **User Stories (Phase 3-7)**: 全部相依於 Foundational 階段完成
  - US1（首頁）與 US2（專案頁）為 P1，可同時進行
  - US4（懸停效果）為 P1，但需在 US1/US2 版面完成後進行
  - US3（部落格）為 P2，可在 P1 完成後進行
  - US5（響應式/無障礙）為 P3，可在所有頁面完成後進行
- **Polish (Phase 8)**: 相依於所有使用情境完成

### 使用情境相依性

- **US1（首頁）**: Foundational 完成後可開始，無其他故事相依
- **US2（專案頁）**: Foundational 完成後可開始，與 US1 平行
- **US3（部落格）**: 可與 US1/US2 平行，但建議 US2 完成後以複用卡片樣式
- **US4（懸停效果）**: 需各頁面基本版面完成，可平行處理各頁面
- **US5（響應式）**: 需各頁面完成，可平行處理各樣式檔案

### 各使用情境內部順序

1. HTML 結構優先
2. JavaScript 功能次之
3. CSS 樣式與懸停效果最後
4. 每個故事完成後驗證可獨立測試

### 平行執行機會

- Setup 階段：T002、T003、T004 可平行
- Foundational 階段：T007 可與 T005/T006 平行
- US1：T013、T014 可平行
- US2：T019 可與 T018 平行
- US3：T025 可與 T024 平行
- US4：T029、T030、T031、T032、T033 可全部平行
- US5：T035、T036、T037、T038、T039 可全部平行
- Polish：T041、T042 可平行

---

## 平行範例：User Story 4（懸停效果）

```bash
# 可同時啟動所有懸停效果任務：
Task: T029 "實作導航連結懸停效果於 frontend/src/styles/main.css"
Task: T030 "強化專案卡片懸停效果於 frontend/src/styles/projects.css"
Task: T031 "實作社群圖示懸停效果於 frontend/src/styles/main.css"
Task: T032 "強化終端機區塊懸停發光效果於 frontend/src/styles/main.css"
Task: T033 "實作部落格卡片懸停效果於 frontend/src/styles/blog.css"
```

---

## 實作策略

### MVP 優先（僅 User Story 1）

1. 完成 Phase 1: Setup
2. 完成 Phase 2: Foundational（**關鍵阻擋點**）
3. 完成 Phase 3: User Story 1（首頁）
4. **停下來驗證**：獨立測試首頁視覺與功能
5. 可部署/展示

### 遞增交付

1. Setup + Foundational → 基礎就緒
2. 加入 US1（首頁）→ 獨立測試 → 部署（MVP！）
3. 加入 US2（專案頁）→ 獨立測試 → 部署
4. 加入 US4（懸停效果）→ 視覺品質提升
5. 加入 US3（部落格）→ 獨立測試 → 部署
6. 加入 US5（響應式/無障礙）→ 完整功能
7. 每個故事增加價值且不破壞先前故事

---

## 備註

- [P] 任務 = 不同檔案、無相依
- [Story] 標籤將任務對應至特定使用情境以便追蹤
- 每個使用情境應可獨立完成與測試
- 每個任務或邏輯群組完成後 commit
- 在任意檢查點可暫停以獨立驗證故事
- 避免：模糊任務、同檔案衝突、破壞獨立性的跨故事相依
