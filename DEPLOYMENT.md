# Deployment Guide

## Cloudflare Pages Setup

This website is configured for automatic deployment to **Cloudflare Pages**.

### Prerequisites

1. Cloudflare account (free tier available)
2. GitHub repository connected to Cloudflare
3. Two secrets configured in GitHub repository settings:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

### How to Deploy

#### Option 1: Automatic Deployment (Recommended)

Once GitHub Actions workflow is configured:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build the project
3. Cloudflare Pages will deploy the `dist/` directory
4. Your site will be live at `https://my-personal-website.pages.dev`

#### Option 2: Manual Deployment with Wrangler

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy the project:
   ```bash
   pnpm build
   wrangler pages deploy dist
   ```

### Getting Cloudflare Credentials

1. **API Token**:
   - Go to https://dash.cloudflare.com/profile/api-tokens
   - Click "Create Token"
   - Use "Edit Cloudflare Workers" template
   - Grant permissions for Pages deployment
   - Copy the token to GitHub secret `CLOUDFLARE_API_TOKEN`

2. **Account ID**:
   - Go to https://dash.cloudflare.com/
   - Select your domain
   - Copy the Account ID from the right sidebar
   - Add to GitHub secret `CLOUDFLARE_ACCOUNT_ID`

### Configuration Files

- `astro.config.mjs`: Astro build configuration with site URL
- `wrangler.toml`: Cloudflare Pages configuration
- `.github/workflows/deploy.yml`: GitHub Actions workflow for automatic deployment

### Verify Deployment

After deployment, check:
- **GitHub Actions**: View workflow status in the Actions tab
- **Cloudflare Dashboard**: https://dash.cloudflare.com/
- **Live Site**: https://my-personal-website.pages.dev

## Local Development

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

The dev server will be available at `http://localhost:3000` (or next available port).
