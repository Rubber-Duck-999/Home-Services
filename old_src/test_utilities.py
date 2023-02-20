#!/usr/bin/python3
import utilities
import unittest


class TestColours(unittest.TestCase):
    '''Testing colours class'''
    def test_get_user(self) -> None:
        '''Ensure colours are set'''
        name = utilities.get_user()
        self.assertEqual(name, 'runner')

if __name__ == '__main__':
    unittest.main()
