import src.utilities as utilities

def test_utilities():
    user = utilities.get_user()
    assert user == 'simon'