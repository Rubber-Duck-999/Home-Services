import getpass
import datetime
import time
import logging


def get_user():
    try:
        username = getpass.getuser()
    except OSError:
        username = 'pi'
    return username