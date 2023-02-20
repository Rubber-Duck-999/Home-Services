'''Utility functions'''
import getpass


def get_user() -> str:
    '''Returns host username'''
    try:
        username = getpass.getuser()
    except OSError:
        username = 'pi'
    return username
