<!-- 注意：所有規格、計畫與對使用者的文件必須以繁體中文（zh-TW）撰寫。 -->
# 快速開始

## 需求
- Node.js（建議 18+，用於 Puppeteer 擷取）
- Python（建議 3.11+，用於 SSIM 視覺測試）

## 本地啟動（靜態伺服器）
從專案根目錄啟動靜態伺服器，根目錄指向 `frontend/src`：

- Python 方式（建議）
  - `python -m http.server 3000 --directory frontend/src`

- 其他方式（擇一）
  - `npx serve frontend/src -l 3000`

啟動後可於瀏覽器開啟：
- `/` 首頁
- `/pages/projects.html` 專案頁
- `/pages/blog.html` 部落格頁

## 視覺比對測試（SSIM）
1. 啟動本地伺服器（3000 連接埠）
2. 執行測試腳本：
   - `python tests/visual/test_homepage_ssim.py`
   - `python tests/visual/test_project_alpha_ssim.py`

> 若需新增/更新基準圖，請先確認 Figma 參考網站最新狀態再擷取。