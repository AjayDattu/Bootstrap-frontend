# utils/base_test.py
from selenium import webdriver
from selenium.webdriver.common.by import By

class BaseTest:
    def setup(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()

    def teardown(self):
        self.driver.quit()

    def find_element(self, by, value):
        return self.driver.find_element(by, value)
