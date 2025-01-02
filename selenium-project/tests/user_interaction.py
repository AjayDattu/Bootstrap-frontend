# tests/test_user_interactions.py
import unittest
from utils.base_test import BaseTest
from selenium.webdriver.common.by import By

class TestUserInteractions(BaseTest, unittest.TestCase):
    def test_like_post(self):
        self.setup()
        self.driver.get("https://www.memoa.app/")
        
        # Login steps
        self.find_element(By.ID, "username").send_keys("testuser")
        self.find_element(By.ID, "password").send_keys("password123")
        self.find_element(By.ID, "login-button").click()
        
        # Like post
        self.find_element(By.XPATH, "//button[contains(@class, 'like-button')]").click()
        
        # Validate like action
        liked = self.find_element(By.XPATH, "//button[contains(@class, 'liked')]")
        assert liked is not None
        self.teardown()
