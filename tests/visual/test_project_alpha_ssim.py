#!/usr/bin/env python3
"""Test: Capture projects page and compare with baseline using SSIM."""
import sys
import os
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from compare_ssim import compare

async def test_projects_page():
    """Capture projects page and compare to baseline."""
    import subprocess
    import asyncio
    
    # Capture projects page
    out = 'tests/visual/out_projects.png'
    cmd = ['node', 'tests/visual/capture.js', 'http://127.0.0.1:3000/pages/projects.html', out]
    proc = subprocess.run(cmd, capture_output=True, text=True)
    if proc.returncode != 0:
        print(f'Capture failed: {proc.stderr}')
        sys.exit(1)
    
    # Compare against baseline
    baseline = 'figma-site-snapshots/projects_before_hover_2026-01-21T14-19-12-519Z.png'
    if not os.path.exists(baseline):
        print(f'Baseline not found: {baseline}')
        sys.exit(2)
    
    score = compare(baseline, out)
    print(f'SSIM {score}')
    threshold = 0.98
    sys.exit(0 if score >= threshold else 3)

if __name__ == '__main__':
    import asyncio
    asyncio.run(test_projects_page())
