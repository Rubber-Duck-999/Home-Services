#!/usr/bin/env python
try:
    import blinkt as leds
except ModuleNotFoundError as error:
    print('Module not found using alternative for testing')
    import mock_blinkt as leds
import time
from constants import *
import datetime

class Tesseract:

    def __init__(self):
        leds.set_clear_on_exit(False)

    def start(self):
        '''
        Switches between ON and OFF depending on hour setting
        '''
        now = datetime.datetime.now()
        if now.hour > 17 or now.hour < 8:
            leds.set_all(0, 0, 0, 0.1)
            time.sleep(30)
        else:
            for i in 255:
                leds.set_all(0, 0, i, 0.1)
                time.sleep(1.0 / 60)

if __name__ == "__main__":
    current_tesseract = Tesseract()
    while True:
        current_tesseract.show()