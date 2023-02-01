#!/usr/bin/python3

import speedtest
import enum
import logging
import json
import requests
import utilities

class Colours(enum.Enum):
    Red    = 1
    Orange = 2
    Purple = 3
    Green  = 4
    Blue   = 5


class Network:

    def __init__(self):
        '''Constructor for class'''
        self.speed = speedtest.Speedtest()
        self.download   = 0
        self.red    = 30
        self.orange = 60
        self.purple = 90
        self.green  = 120
        self.server = ''
        self.settings = False

    def get_settings(self):
        '''Get config env var'''
        logging.info('get_settings()')
        config = '/home/{}/sync/config.json'
        try:
            config_name = config.format(utilities.get_user())
            with open(config_name) as file:
                data = json.load(file)
            self.server = '{}/network/list'.format(data["server_address"])
            logging.info(self.server)
            self.settings = True
        except KeyError:
            logging.error("Variables not set")
            self.settings = False
        except OSError:
            logging.error('Issue getting username')
            self.settings = False

    def send_speed(self, down, up):
        '''Send speed to rest server'''
        logging.info("send_speed()")
        try:
            data = {
                'upload': float(up),
                'download': float(down),
            }
            logging.info("Sending: {}".format(data))
            response = requests.post(self.server, json=data, timeout=5)
            if response.status_code == 200:
                logging.info("Requests successful")
            else:
                logging.error('Requests unsuccessful')
                logging.info('Response: {}'.format(response.content))
        except requests.ConnectionError as error:
            logging.error("Connection error: {}".format(error))
        except requests.Timeout as error:
            logging.error("Timeout on server: {}".format(error))
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
            logging.error('Error occurred: {}'.format(error))

    def check_colour(self):
        '''Check speed of both checks'''
        logging.info("check_speed()")
        if self.download <= self.red:
            return Colours.Red
        if self.download <= self.orange:
            return Colours.Orange
        if self.download <= self.purple:
            return Colours.Purple
        if self.download <= self.green:
            return Colours.Green
        return Colours.Blue

if __name__ == "__main__":
    network_test = Network()
    network_test.check_speed()
