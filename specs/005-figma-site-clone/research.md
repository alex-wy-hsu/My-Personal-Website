<!-- 注意：所有規格、計畫與對使用者的文件必須以繁體中文（zh-TW）撰寫。 -->
# 研究結論

## 主題：深色模式切換（靜態站點）
- Decision: 使用 CSS 變數（`--color-*`）集中管理配色，透過 `data-theme` 切換；預設尊重 `prefers-color-scheme`，並以 `localStorage` 記住使用者選擇。
- Rationale: CSS 變數可在單一樣式表中統一切換；`prefers-color-scheme` 符合使用者偏好；`localStorage` 提供持久化偏好。
- Alternatives considered: 分離深淺色樣式檔（維護成本高）、純 CSS 勾選框切換（瀏覽器支援有限且不易持久化）、外部 Web Component（增加相依）。

## 主題：懸停與卡片提升動畫
- Decision: 只使用 `transform` 與 `opacity` 進行動畫，卡片提升採 `translateY()`，過渡時間 200–300ms，並支援 `prefers-reduced-motion`。
- Rationale: `transform/opacity` 能走 GPU 合成層，避免重排/重繪導致卡頓；200–300ms 為常見微互動體感區間；尊重減少動態可及性需求。
- Alternatives considered: 動畫 `top/margin`（會觸發 layout）、過長的過渡時間（互動遲鈍）、完全移除懸停回饋（降低可用性）。
