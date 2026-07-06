<!-- 注意：所有規格、計畫與對使用者的文件必須以繁體中文（zh-TW）撰寫。 -->
# 資料模型

## 實體：Project
- 說明：專案頁卡片資料
- 欄位
  - `id`（string，唯一）
  - `title`（string，必填）
  - `year`（number，必填，範圍 2022–2024）
  - `description`（string，必填）
  - `tags`（string[]，至少 1 個）
  - `demoUrl`（string，可選，URL）
  - `githubUrl`（string，可選，URL）
- 驗證規則
  - `id` 不可重複
  - `title`、`description` 不可為空
  - `tags` 需為非空陣列

## 實體：BlogPost
- 說明：部落格頁卡片資料
- 欄位
  - `id`（string，唯一）
  - `title`（string，必填）
  - `summary`（string，必填，一行濃縮說明）
  - `year`（number，必填）
- 驗證規則
  - `title`、`summary` 不可為空
  - `summary` 建議控制在單行可視範圍

## 實體：SocialLink
- 說明：首頁社群圖示連結
- 欄位
  - `platform`（string，必填，enum: GitHub | LinkedIn | Email）
  - `url`（string，必填）
  - `icon`（string，必填；用於 icon class 或 SVG key）
- 驗證規則
  - `url` 必須為有效連結（Email 使用 `mailto:`）

## 關係與使用位置
- `Project`：用於 `/projects` 專案卡片
- `BlogPost`：用於 `/blog` 部落格卡片
- `SocialLink`：用於首頁社群連結區
