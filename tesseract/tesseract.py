#!/usr/bin/env python
try:
    import blinkt as leds
except ModuleNotFoundError as error:
    print('Module not found using alternative for testing')
    import mock_blinkt as leds
import time
from constants import *
import datetime
import colorsys
from sys import exit
try:
    import numpy as np
except ImportError:
    exit('This script requires the numpy module\nInstall with: sudo apt install python3-numpy')

leds.clear()
leds.set_clear_on_exit(False)
start = 0
end = 60

def lights():
    i = 0
    while i < 3600:
        wait = np.random.choice(np.random.noncentral_chisquare(5, 1, 1000), 1)[0] / 50
        n = np.random.choice(np.random.noncentral_chisquare(5, 0.1, 1000), 1)
        limit = int(n[0])

        if limit > leds.NUM_PIXELS:
            limit = leds.NUM_PIXELS

        for pixel in range(limit):
            hue = start + (((end - start) / float(leds.NUM_PIXELS)) * pixel)
            r, g, b = [int(c * 255) for c in colorsys.hsv_to_rgb(hue / 360.0, 1.0, 1.0)]
            leds.set_pixel(pixel, r, g, b)
            leds.show()
            time.sleep(0.05 / (pixel + 1))

        time.sleep(wait)
        leds.clear()
        i = i + 1


def show():
    now = datetime.datetime.now()
    if now.hour > 21 or now.hour < 7:
        leds.clear()
        time.sleep(30)
    else:
        lights()

if __name__ == "__main__":
    while True:
        show()