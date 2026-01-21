#!/usr/bin/env python3
"""Compare two images using SSIM. Usage:
  python compare_ssim.py baseline.png actual.png
"""
import sys
from skimage import io, img_as_float
from skimage.metrics import structural_similarity as ssim
import numpy as np

def compare(a,b):
    ia = img_as_float(io.imread(a))
    ib = img_as_float(io.imread(b))
    if ia.shape != ib.shape:
        print('DIFFERENT-SHAPE', ia.shape, ib.shape)
        return 0.0
    if ia.ndim == 3 and ia.shape[2] == 4:
        ia = ia[:,:,:3]
        ib = ib[:,:,:3]
    score = ssim(ia, ib, multichannel=True)
    return score

def main():
    if len(sys.argv) < 3:
        print('Usage: compare_ssim.py baseline.png actual.png')
        sys.exit(2)
    s = compare(sys.argv[1], sys.argv[2])
    print('SSIM', s)
    sys.exit(0 if s >= 0.98 else 3)

if __name__ == '__main__':
    main()
