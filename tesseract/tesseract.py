#!/usr/bin/env python
try:
    import blinkt as leds
except ModuleNotFoundError as error:
    print('Module not found using alternative for testing')
    import mock_blinkt as leds
import time
from colorsys import hsv_to_rgb
from constants import *

class Tesseract:

    def __init__(self):
        leds.set_clear_on_exit(False)

    def show(self):
        hue = (time.time() / 10.0)
        r, g, b = [int(c * 255) for c in hsv_to_rgb(hue, 1.0, 1.0)]
        leds.set_all(0, 0, b, 0.1)
        time.sleep(1.0 / 60)

if __name__ == "__main__":
    current_tesseract = Tesseract()
    while True:
        current_tesseract.show()