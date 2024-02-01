#!/usr/bin/env python
try:
    import blinkt as leds
except ModuleNotFoundError as error:
    print('Module not found using alternative for testing')
    import mock_blinkt as leds
import time
from constants import *
import datetime

leds.set_clear_on_exit(False)

def show():
    now = datetime.datetime.now()
    if now.hour > 21 or now.hour < 7:
        leds.set_all(0, 0, 0, 0.1)
        time.sleep(30)
    else:
        for i in range(256):
            leds.set_all(0, 0, i, 0.1)
            time.sleep(1.0 / 60)

if __name__ == "__main__":
    while True:
        show()