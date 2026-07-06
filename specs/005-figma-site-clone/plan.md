<!-- 注意：所有規格、計畫與對使用者的文件必須以繁體中文（zh-TW）撰寫。 -->
# 實作計畫：複製 Figma 個人作品集網站

**Branch**: `005-figma-site-clone` | **Date**: 2026-02-08 | **Spec**: [specs/005-figma-site-clone/spec.md](specs/005-figma-site-clone/spec.md)
**Input**: 來自 `/specs/005-figma-site-clone/spec.md` 的功能規格

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

以既有 `frontend/src` 架構實作靜態前端頁面（首頁、專案、部落格），完整複製 Figma 參考網站的版面、樣式與互動效果；使用 CSS 變數與輕量 JS 支援深色模式切換，並保留視覺比對（SSIM）測試流程。

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: HTML5、CSS3、JavaScript（ES2020）  
**Primary Dependencies**: 執行期無外部相依；開發/測試使用 Puppeteer（視覺擷取）與 Python 視覺比對腳本  
**Storage**: 靜態 JSON（`frontend/src/data`）  
**Testing**: Python 視覺比對（SSIM）+ Node/Puppeteer 擷取  
**Target Platform**: 現代桌面瀏覽器（Chrome / Firefox / Edge）與手機響應式  
**Project Type**: web（單一前端專案）  
**Performance Goals**: 首次載入 ≤ 3 秒；互動與懸停 60fps  
**Constraints**: 無後端、需與 Figma 參考視覺一致、重視可及性與鍵盤操作  
**Scale/Scope**: 3 個頁面（首頁/專案/部落格）、6 個專案卡片、3 篇部落格卡片

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- 程式碼品質：採用現有前端結構，遵循一致樣式與模組化元件拆分。**PASS**
- 測試標準：維持 SSIM 視覺比對與擷取腳本，必要時補齊新頁面基準圖。**PASS**
- 使用者體驗一致性：延續單一設計系統（色彩、字體、卡片與互動）。**PASS**
- 效能要求：使用 `transform/opacity` 互動效果，避免重排，符合 60fps 目標。**PASS**
- 可觀察性與簡潔性：靜態站點，維持簡潔實作與可讀結構。**PASS**
- 額外限制（靜態優先、隱私）：無第三方追蹤服務與後端依賴。**PASS**

**Phase 1 設計後覆核**：維持上述結論，無需例外或複雜度追蹤。**PASS**

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
frontend/
└── src/
  ├── components/
  ├── data/
  ├── pages/
  └── styles/

tests/
└── visual/
```

**Structure Decision**: 使用既有 `frontend/src` 作為單一前端專案結構，視覺比對測試維持在 `tests/visual`。

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
