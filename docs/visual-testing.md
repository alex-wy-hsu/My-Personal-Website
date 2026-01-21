# Visual testing

How to run local visual regression checks.

Prerequisites
- Node.js (16+)
- Python 3.8+ and `scikit-image` (`pip install scikit-image`)
- `puppeteer` installed in project (see `npm i puppeteer`)

Capture a page (local dev server required):

```bash
# start a static server from project root
npx http-server frontend/src -p 3000

# capture homepage
node tests/visual/capture.js http://localhost:3000 tests/visual/out_home.png

# compare to baseline (baseline stored under figma-site-snapshots/)
python tests/visual/compare_ssim.py figma-site-snapshots/home_hover_baseline.png tests/visual/out_home.png
```

Adjust SSIM threshold in `tests/visual/compare_ssim.py` exit code logic if needed.
