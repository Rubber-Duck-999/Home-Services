''' Mood Light program
'''
#!/usr/bin/env python3
# pylint: disable=consider-using-f-string import-error logging-format-interpolation bare-except

import time
import logging
from colorsys import hsv_to_rgb
import datetime
try:
    from unicornhatmini import UnicornHATMini
except:
    from mock_hat import UnicornHATMini

# Add the log message handler to the logger
logging.basicConfig(format='%(asctime)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

unicornhatmini = UnicornHATMini()
unicornhatmini.set_brightness(0.1)

def get_colours() -> None:
    '''
    Sets RGB colours for the leds
    '''
    count = 0
    max = 300
    while count < max:
        hue = (time.time() / 10.0)
        r, g, b = [int(c * 255) for c in hsv_to_rgb(hue, 1.0, 1.0)]
        unicornhatmini.set_all(r, g, b)
        unicornhatmini.show()
        time.sleep(1.0 / 60)
        count = count + 1

def start() -> None:
    '''
    Switches between ON and OFF depending on hour setting
    '''
    logging.info('start()')
    now = datetime.datetime.now()
    if now.hour > 17 or now.hour < 8:
        logging.info('Night time')
        unicornhatmini.set_all(0, 0, 0)
        unicornhatmini.show()
        time.sleep(30)
    else:
        get_colours()

if __name__ == "__main__":
    logging.info('Starting Program')
    while True:
        start()