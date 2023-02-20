#!/usr/bin/python3
'''To set up the led array'''
try:
    import blinkt
except ImportError:
    import mock_blinkt as blinkt
import logging
import os
import time
import src.utilities as utilities
from src.network import Colours, Network

class Led:
    '''Class for contorlling led'''
    def __init__(self):
        self.brightness = 0.05
        self.pixels = 8
        blinkt.clear()
        blinkt.show()
        blinkt.set_clear_on_exit(True)

    def set_all(self, red, green, blue):
        '''Sets all pixels on the blinkt module'''
        for pixel in range(self.pixels):
            blinkt.set_pixel(pixel, red, green, blue, self.brightness)
        blinkt.show()

    def get_colours(self, colour) -> tuple[int, int, int]:
        '''Sets RBG colours for array'''
        blue = 0
        green = 0
        red = 0
        if colour is None:
            red = 255
            green = 192
            blue = 203
            return red, green, blue
        if colour == Colours.RED:
            red = 255
        elif colour == Colours.ORANGE:
            red = 236
            green = 94
            blue = 2
        elif colour == Colours.PURPLE:
            red = 110
            green = 51
            blue = 255
        elif colour == Colours.GREEN:
            green = 255
        elif colour == Colours.BLUE:
            blue = 255
        return red, green, blue

    def run_lights(self, sender):
        '''Updates light colours and checks speed'''
        for show in Colours:
            time.sleep(5)
            red, green, blue = self.get_colours(show)
            self.set_all(red, green, blue)
        time.sleep(5)
        while True:
            network.check_speed()
            colour = sender.check_colour()
            logging.info(f"New Colour: {colour}".format(colour))
            self.set_all(0, 0, 0)
            red, green, blue = self.get_colours(colour)
            self.set_all(red, green, blue)
            time.sleep(600)


if __name__ == "__main__":
    filename = '/home/{}/sync/InternetSpeedNotifier.log'
    try:
        name = utilities.get_user()
        filename = filename.format(name)
        os.remove(filename)
    except OSError as error:
        pass

    # Add the log message handler to the logger
    logging.basicConfig(filename=filename,
                        format='%(asctime)s - %(levelname)s - %(message)s', 
                        level=logging.INFO)
    logging.info('Starting Program')
    led = Led()
    network = Network()
    network.get_settings()
    try:
        led.run_lights(network)
    except KeyboardInterrupt:
        logging.error('Error occurred on keyboard')
