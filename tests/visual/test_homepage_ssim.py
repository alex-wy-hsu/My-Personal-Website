#!/usr/bin/env python3
"""Test: Capture homepage and compare with baseline using SSIM."""
import sys
import os
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from compare_ssim import compare

def test_homepage():
    """Capture homepage and compare to baseline."""
    import subprocess
    
    # Capture homepage
    out = 'tests/visual/out_home.png'
    cmd = ['node', 'tests/visual/capture.js', 'http://127.0.0.1:3000', out]
    proc = subprocess.run(cmd, capture_output=True, text=True)
    if proc.returncode != 0:
        print(f'Capture failed: {proc.stderr}')
        sys.exit(1)
    
    # Compare against baseline (use first home_hover baseline)
    baselines = [
        'figma-site-snapshots/home_hover_2026-01-21T13-44-14-106Z.png',
        'figma-site-snapshots/Personal_Website_Builder_1.png'
    ]
    baseline = None
    for b in baselines:
        if os.path.exists(b):
            baseline = b
            break
    
    if not baseline:
        print('No baseline found')
        sys.exit(2)
    
    score = compare(baseline, out)
    print(f'SSIM {score}')
    threshold = 0.98
    sys.exit(0 if score >= threshold else 3)

if __name__ == '__main__':
    test_homepage()
