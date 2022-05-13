import os
from cv2 import cv2

for d in os.listdir():
	if not d.endswith(".png"): continue
	img = cv2.imread(d)
	cv2.imwrite(d.replace(".png",".webp"), img)
	os.remove(d)