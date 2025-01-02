# tests/test_login.py
import unittest
from utils.base_test import BaseTest
from selenium.webdriver.common.by import By

class TestLogin(BaseTest, unittest.TestCase):
    def test_valid_login(self):
        self.setup()
        self.driver.get("https://example.com/login")
        
        self.find_element(By.ID, "username").send_keys("testuser")
        self.find_element(By.ID, "password").send_keys("password123")
        self.find_element(By.ID, "login-button").click()
        
        # Validate login success
        assert "Welcome" in self.driver.page_source
        self.teardown()
