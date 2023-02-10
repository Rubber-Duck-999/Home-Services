import getpass


def get_user() -> str:
    try:
        username = getpass.getuser()
    except OSError:
        username = 'pi'
    return username