# My Personal Website

A minimal personal website built with Astro, featuring:

- 📝 Blog with Markdown content collections
- 🎨 Chinese uppercase year badges (貳零貳伍)
- 🎨 Low-contrast color system
- 💻 Terminal-style About page
- ⚡ Static site generation

## Tech Stack

- **Framework**: Astro 5.16.8
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Deployment**: Cloudflare Pages

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Astro components (YearBadge, Terminal)
│   ├── content/         # Markdown blog posts
│   │   ├── config.ts    # Content collections config
│   │   └── blog/        # Blog post markdown files
│   ├── data/            # Data files (about.ts)
│   ├── layouts/         # Layout components
│   ├── pages/           # Route pages
│   ├── styles/          # Global CSS
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
└── tsconfig.json        # TypeScript configuration
```

## Deployment

### Cloudflare Pages

This project is configured for Cloudflare Pages deployment:

- **Build command**: `pnpm build`
- **Output directory**: `dist`

### GitHub Pages (Alternative)

If deploying to GitHub Pages, uncomment the `base` setting in `astro.config.mjs`.

## Features

### Chinese Year Badges

Year badges display in traditional Chinese uppercase numerals:
- 2025 → 貳零貳伍
- 2024 → 貳零貳肆

### Terminal About Page

The About page features a terminal-style UI with low-contrast colors suitable for extended reading.

### Color System

Uses CSS variables for easy theming with low-saturation accent colors per year.

## License

MIT
