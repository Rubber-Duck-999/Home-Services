#!/usr/bin/env python
try:
    import blinkt as leds
except ModuleNotFoundError as error:
    print('Module not found using alternative for testing')
    import mock_blinkt as leds
import time
from constants import *

class Tesseract:

    def __init__(self, current_pattern):
        leds.set_clear_on_exit(False)
        self.current_pattern = current_pattern

    def set_calm(self):
        for index in range(1, 3, 1):
            leds.set_all(0, 0, 255, index/10)
            leds.show()
            time.sleep(0.5)

    def set_happy(self):
        for index in range(4, 6, 1):
            leds.set_all(0, 0, 255, index/10)
            leds.show()
            time.sleep(0.2)

    def set_angry(self):    
        leds.set_all(0, 0, 255, 1.0)
        leds.show()
        time.sleep(0.2)
        leds.set_all(0, 0, 255, 0.5)
        leds.show()
        time.sleep(0.2)

    def show(self):
        if self.current_pattern == CALM:
            self.set_calm()
        elif self.current_pattern == HAPPY:
            self.set_happy()
        elif self.current_pattern == ANGRY:
            self.set_angry()

if __name__ == "__main__":
    current_tesseract = Tesseract()
    while True:
        current_tesseract.show()