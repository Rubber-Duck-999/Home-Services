#!/usr/bin/python3
'''Create POST requests'''
import enum
import logging
import json
import speedtest
import requests
import src.utilities as utilities


class Colours(enum.Enum):
    '''Constants for colour scheming'''
    RED = 1
    ORANGE = 2
    PURPLE = 3
    GREEN = 4
    BLUE = 5


class Network:
    '''Network class for sending data'''

    def __init__(self):
        '''Constructor for class'''
        self.speed = speedtest.Speedtest()
        self.download = 0
        self.server = ''
        self.settings = False

    def get_settings(self):
        '''Get config env var'''
        logging.info('get_settings()')
        config = '/home/{}/sync/config.json'
        try:
            config_name = config.format(utilities.get_user())
            with open(config_name, encoding='utf-8') as file:
                data = json.load(file)
            self.server = f"{data}/network".format(data=data["server_address"])
            logging.info(self.server)
            self.settings = True
        except KeyError:
            logging.error("Variables not set")
            self.settings = False
        except OSError:
            logging.error('Issue getting username')
            self.settings = False

    def send_speed(self, down, upload):
        '''Send speed to rest server'''
        logging.info("send_speed()")
        try:
            server = self.server + \
                f'?download={down}&upload={upload}'.format(down, upload)
            response = requests.post(server, timeout=5)
            if response.status_code == 200:
                logging.info("Requests successful")
            else:
                logging.error('Requests unsuccessful')
                data = response.content
                logging.info(f"Response: {data}".format())
        except requests.ConnectionError as error:
            logging.error(f"Connection error: {error}".format(error))
        except requests.Timeout as error:
            logging.error(f"Timeout on server: {error}".format(error))
        except OSError:
            logging.error("File couldn't be removed")

    def check_speed(self):
        '''Check speed of both checks'''
        logging.info("check_speed()")
        try:
            down_speed = self.speed.download() / 1048576
            up_speed = self.speed.upload() / 1048576
            down = round(down_speed)
            up = round(up_speed)
            self.send_speed(down, up)
        except speedtest.SpeedtestException as error:
            logging.error(f'Error occurred: {error}'.format(error))

    def check_colour(self):
        '''Check speed of both checks'''
        logging.info("check_speed()")
        if self.download <= 30:
            return Colours.RED
        if self.download <= 60:
            return Colours.ORANGE
        if self.download <= 90:
            return Colours.PURPLE
        if self.download <= 120:
            return Colours.GREEN
        return Colours.BLUE


if __name__ == "__main__":
    network_test = Network()
    network_test.check_speed()
