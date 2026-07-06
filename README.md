# My Personal Website — Portfolio Clone

**Language / 語言**: English | [繁體中文](README.zh-TW.md)

A static personal portfolio website cloned from a [Figma reference design](https://ice-turn-79703411.figma.site/), featuring a terminal-style homepage, projects page, blog page, and dark/light theme toggle. Spec-driven development with [Speckit](https://github.com/microsoft/github-copilot-specs).

---

## Preview

### Implemented Site

![Homepage](tests/visual/new_home.png)

### Figma Reference Design

![Figma Reference](figma-site-snapshots/Personal_Website_Builder_1.png)

---

## Features

- ✅ Homepage with terminal-style `$ whoami` / `$ cat` block
- ✅ Navigation links to Projects and Blog pages
- ✅ Social links (GitHub, LinkedIn, Email)
- ✅ Projects page with 6 project cards (title, year, description, tech tags)
- ✅ Hover effects on cards matching the Figma reference
- ✅ Blog page with 3 post cards
- ✅ Dark / light theme toggle via CSS variables
- ✅ Keyboard-accessible and screen-reader-friendly (a11y)
- ✅ Visual regression tests using SSIM comparison (Python + Puppeteer)

---

## Project Structure

```
My-Personal-Website/
├── frontend/
│   └── src/
│       ├── index.html           # Homepage
│       ├── main.js              # Entry JS
│       ├── components/          # Reusable JS components
│       │   ├── BlogCard.js
│       │   ├── ProjectCard.js
│       │   ├── TerminalBlock.js
│       │   └── ThemeToggle.js
│       ├── data/
│       │   ├── projects.json    # 6 project entries
│       │   └── posts.json       # 3 blog post entries
│       ├── pages/
│       │   ├── projects.html
│       │   └── blog.html
│       └── styles/
│           ├── main.css
│           ├── theme.css        # CSS variables (dark/light)
│           ├── projects.css
│           ├── terminal.css
│           └── a11y.css
├── specs/
│   └── 005-figma-site-clone/    # Speckit-generated docs
│       ├── spec.md
│       ├── plan.md
│       ├── tasks.md
│       ├── research.md
│       ├── data-model.md
│       ├── quickstart.md
│       └── contracts/
│           └── openapi.yaml
├── tests/
│   └── visual/                  # Visual regression tests
│       ├── capture.js           # Puppeteer screenshot capture
│       ├── compare_ssim.py
│       ├── test_homepage_ssim.py
│       └── test_project_alpha_ssim.py
├── figma-site-snapshots/        # Reference screenshots from Figma
└── package.json
```

---

## Quick Start

### Prerequisites

- Node.js 16+
- A static file server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code, or `npx serve`)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/alex-wy-hsu/My-Personal-Website.git
cd My-Personal-Website

# Serve the frontend
npx serve frontend/src
# or open frontend/src/index.html directly in a browser
```

### Run Visual Tests

```bash
# Install dependencies
npm install

# Capture screenshots (requires running dev server on port 3000)
node tests/visual/capture.js

# Run SSIM comparison
python tests/visual/test_homepage_ssim.py
python tests/visual/test_project_alpha_ssim.py
```

---

## Spec & Design Docs (Speckit)

This feature was planned and implemented using [Speckit](https://github.com/microsoft/github-copilot-specs), a spec-driven AI development workflow.

| Document | Description |
|---|---|
| [spec.md](specs/005-figma-site-clone/spec.md) | Feature specification & user stories |
| [plan.md](specs/005-figma-site-clone/plan.md) | Technical implementation plan |
| [tasks.md](specs/005-figma-site-clone/tasks.md) | Task breakdown by phase |
| [research.md](specs/005-figma-site-clone/research.md) | Reference site analysis |
| [data-model.md](specs/005-figma-site-clone/data-model.md) | JSON data schema |
| [quickstart.md](specs/005-figma-site-clone/quickstart.md) | Dev environment setup guide |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, no framework) |
| Logic | Vanilla JavaScript (ES2020) |
| Screenshots | Puppeteer (Node.js) |
| Visual Tests | Python + scikit-image (SSIM) |
| Dev Workflow | Speckit + GitHub Copilot |

---

## AI Development Info

### Development Workflow

This project was developed using a **spec-driven AI workflow**:

1. `/speckit.specify` — Generated `spec.md` from a natural language description
2. `/speckit.plan` — Produced `plan.md`, `research.md`, `data-model.md`, and `quickstart.md`
3. `/speckit.tasks` — Broke implementation down into phased tasks in `tasks.md`
4. `/speckit.implement` — Executed tasks with GitHub Copilot Agent

### AI Tools Used

- **GitHub Copilot** (Agent mode) — Implementation
- **Speckit commands** — Spec, plan, and task generation
- **Reference site**: [ice-turn-79703411.figma.site](https://ice-turn-79703411.figma.site/)

---

## License

This project is for learning and portfolio demonstration purposes.
