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

def make_gaussian(fwhm):
    x = np.arange(0, leds.NUM_PIXELS, 1, float)
    y = x[:, np.newaxis]
    x0, y0 = 3.5, 3.5
    fwhm = fwhm
    gauss = np.exp(-4 * np.log(2) * ((x - x0) ** 2 + (y - y0) ** 2) / fwhm ** 2)
    return gauss

def lights():
    i = 0
    while i < 3600:
        for z in list(range(1, 10)[::-1]) + list(range(1, 10)):
            fwhm = 5.0 / z
            gauss = make_gaussian(fwhm)
            start = time.time()
            y = 4

            for x in range(leds.NUM_PIXELS):
                h = 0.63
                s = 1.0
                v = gauss[x, y]
                rgb = colorsys.hsv_to_rgb(h, s, v)
                r, g, b = [int(255.0 * i) for i in rgb]
                leds.set_pixel(x, r, g, b)

            leds.show()
            end = time.time()
            t = end - start

            if t < 0.04:
                time.sleep(0.04 - t)
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