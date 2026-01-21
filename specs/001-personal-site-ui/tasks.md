<!-- 注意：所有任務與說明均以繁體中文（zh-TW）撰寫。 -->
---

description: "Tasks for feature 001-personal-site-ui — implement visuals & hover interactions based on figma-site-snapshots"
---

# 任務清單：打造個人網站 — 視覺與滑鼠互動實作

**輸入**：設計截圖與規格位於 `specs/001-personal-site-ui/`（spec.md、plan.md、figma-site-snapshots/）

## Phase 1：Setup（共享基礎設置）

目的：建立專案前端骨架、開發工具與視覺比對測試基礎

- [ ] T001 [P] 建立前端專案結構與檔案夾：`frontend/src/`, `frontend/src/components/`, `frontend/src/pages/`, `frontend/src/styles/`, `tests/visual/`, `figma-site-snapshots/`
- [ ] T002 [P] 在專案根目錄新增或更新 `package.json`（紀錄依賴與 script）
- [ ] T003 [P] 安裝並紀錄開發依賴（建議：`puppeteer`、`scikit-image` 或 `ssim` 工具、`axe-core`/`axe-cli`），在 `package.json` 的 `devDependencies` 中
- [ ] T004 [P] 新增基本 lint/format 設定：`.eslintrc`, `.prettierrc`（路徑：專案根目錄）
- [ ] T005 新增 `.gitignore`（已新增於 repo 根目錄）並確認 `figma-site-snapshots/` 留存

---

## Phase 2：Foundational（阻塞性前置）

目的：完成所有故事均依賴的基礎元件與自動化測試骨架

- [ ] T006 建立共用 HTML 版面範本：`frontend/src/index.html`（包含 header/nav/footer）
- [ ] T007 新增全域樣式檔 `frontend/src/styles/main.css`（包含 CSS 變數、版面網格）
- [ ] T008 新增專案卡片樣式 `frontend/src/styles/projects.css`（Project Card 基本樣式與懸停狀態）
- [ ] T009 新增可及性樣式 `frontend/src/styles/a11y.css`（focus 樣式、對比度規則）
- [ ] T010 新增可重用元件檔案：`frontend/src/components/ProjectCard.js`（或 `.jsx`）、`frontend/src/components/TerminalBlock.js`
- [ ] T011 新增 Projects 頁面範本：`frontend/src/pages/projects.html` 並引用 sample data
- [ ] T012 [P] 建立視覺比對測試骨架：`tests/visual/capture.py`（截圖工具）與 `tests/visual/compare_ssim.py`（使用 SSIM，比對 `figma-site-snapshots/`）
- [ ] T013 [P] 建立 CI 視覺比對工作流程範例：`.github/workflows/visual-diff.yml`

**Checkpoint**：Foundational 完成後，所有 User Story 可開始實作

---

## Phase 3：User Story 1 - 首頁視覺與滑鼠互動（Priority: P1） 🎯 MVP

目標：實作首頁版面與關鍵互動（包含 `terminal` 區塊懸停效果），並以截圖比對驗證畫面與互動

獨立測試：開啟 `frontend/src/index.html`，以自動化截圖腳本產生截圖，並以 `tests/visual/compare_ssim.py` 與 `figma-site-snapshots/home_hover_*.png` 做 SSIM 比對

- [ ] T014 [US1] 建立首頁內容（英雄區、導覽、主要區塊）在 `frontend/src/index.html`（含必要 DOM id/class）
- [ ] T015 [US1] 實作 `terminal` 區塊樣式與懸停樣式：`frontend/src/styles/terminal.css` 與 `frontend/src/components/TerminalBlock.js`
- [ ] T016 [US1] 實作鍵盤 focus 等效樣式以支援無滑鼠環境：`frontend/src/styles/a11y.css`（已包含但需整合）
- [ ] T017 [P] [US1] 新增視覺回歸測試：`tests/visual/test_homepage_ssim.py`（截圖並比對 `figma-site-snapshots/home_hover_*.png`）
- [ ] T018 [US1] 整合 sample 資料及路由以在本地預覽首頁：`frontend/src/data/site.json`、`frontend/src/main.js`

檢查點：在本地啟動後，`tests/visual/test_homepage_ssim.py` 應通過 SSIM 門檻（初始 0.98）

---

## Phase 4：User Story 2 - Projects 頁面專案懸停（Priority: P2)

目標：在 Projects 頁面，將滑鼠移至 `Project Alpha` 時呈現與基準圖一致的懸停效果；提供自動化驗證

獨立測試：使用自動化腳本移至 `Project Alpha` 並截圖，比對 `figma-site-snapshots/projects_after_hover_*.png`

- [ ] T019 [US2] 新增範例資料檔案 `frontend/src/data/projects.json`（含 `Project Alpha`）
- [ ] T020 [US2] 實作 `frontend/src/pages/projects.html` 的 ProjectCard 列表並引用 `ProjectCard` 元件
- [ ] T021 [US2] 實作 Project 卡片的懸停互動（CSS 與必要的 JS）在 `frontend/src/styles/projects.css` 與 `frontend/src/components/project-interactions.js`
- [ ] T022 [P] [US2] 新增視覺回歸測試：`tests/visual/test_project_alpha_ssim.py`（自動將游標移至 Project Alpha 並比對 `figma-site-snapshots/projects_after_hover_*.png`）
- [ ] T023 [US2] 在 `frontend/src/components/ProjectCard.js` 中加入必要 ARIA 屬性與 keyboard handlers

檢查點：`tests/visual/test_project_alpha_ssim.py` 在 HEADLESS 流程中應能穩定觸發懸停並通過 SSIM 比對

---

## Phase 5：User Story 3 - 可及性與行動裝置表現（Priority: P3)

目標：確保無滑鼠（鍵盤）與行動裝置可達成等效互動；優化響應式樣式

- [ ] T024 [US3] 實作並驗證 keyboard focus 行為：`frontend/src/styles/a11y.css` 與元件中的 keyboard handlers
- [ ] T025 [US3] 響應式調整與行動觸控替代（small-screen tweaks）在 `frontend/src/styles/main.css` 與 `frontend/src/styles/projects.css`
- [ ] T026 [P] [US3] 新增 accessibility 自動化檢查：`tests/a11y/run_axe.py`（或 `tests/a11y/check_accessibility.sh`）並在 CI 中執行

檢查點：鍵盤導航能達成與滑鼠相同的互動，行動尺寸下視覺不失真

---

## 最終階段：Polish & Cross-Cutting Concerns

- [ ] T027 [P] 文件：新增 `docs/visual-testing.md`（說明如何執行截圖比對與調整 SSIM 門檻）
- [ ] T028 代碼清理與重構：`frontend/src/` 下的重構與樣式統一
- [ ] T029 [P] 將視覺比對加入 CI：更新 `.github/workflows/visual-diff.yml` 以在 PR 中自動執行
- [ ] T030 優化效能：延遲載入圖片/縮圖（lazy-loading）調整在 `frontend/src/components/ProjectCard.js`

---

## 依賴與執行順序

- Phase 1 (Setup) 可平行啟動（標註 [P] 的任務可同時進行）
- Phase 2 (Foundational) 必須完成後，User Stories 才能開始實作
- User Stories (Phase 3+) 建議以優先順序（P1 → P2 → P3）或在團隊有多人力時並行

## 每個 User Story 的平行範例

- 在 Foundational 完成後：
  - Developer A：實作 `US1`（首頁）
  - Developer B：同時實作 `US2`（Projects）
  - Developer C：同時處理 `US3`（可及性 / 行動）

---

## 實作策略 (MVP-first)

1. 完成 Phase 1 + Phase 2
2. 實作 User Story 1（首頁）並驗證截圖比對通過 → 若可，發佈 MVP
3. 持續實作 User Story 2、User Story 3

---

## 任務統計與備註（自動生成）

- 總任務數：30
- 每個故事任務數：US1=5+, US2=5+, US3=3+
- 並行機會：Setup 與 Foundational 大量 [P] 標注任務可並行
- 建議 MVP 範圍：僅 User Story 1（首頁）
