import unittest
from tesseract import Tesseract
from constants import CALM, HAPPY, ANGRY
import mock_blinkt
from unittest.mock import MagicMock


helper = unittest.mock.create_autospec(mock_blinkt.show)

class TestMainMethods(unittest.TestCase):
    '''Class to test the various functions of the tesseract module'''

    def setUp(self):
        self.current_pattern = CALM
        self.test_tesseract = Tesseract(self.current_pattern)

    def test_not_set_happy(self):
        expected_mood = HAPPY
        current_pattern = self.test_tesseract.current_pattern
        self.assertNotEqual(current_pattern, expected_mood)

    def test_set_angry(self):
        self.test_tesseract.current_pattern = ANGRY
        mock_blinkt.show = MagicMock()
        self.test_tesseract.show()
        self.assertNotEqual(mock_blinkt.show.call_count, 1)

if __name__ == '__main__':
    unittest.main()

