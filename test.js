const { Builder, By, until } = require("selenium-webdriver");

(async function testLogin() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Open the login page
    await driver.get("https://www.memoa.app/login");

    // Locate username and password fields and login button
    const usernameField = await driver.findElement(By.id("username"));
    const passwordField = await driver.findElement(By.id("password"));
    const loginButton = await driver.findElement(By.css("button[type='submit']"));

    // Enter credentials and submit
    await usernameField.sendKeys("dattuajay005@gmail.com");
    await passwordField.sendKeys("Dcme$046");
    await loginButton.click();
    console.log("Simulating post likes...");

    await driver.wait(until.elementLocated(By.css(".DollCardActions_like-btn__a19TH")), 5000); // Wait for the "like" button
    const likeButtons = await driver.findElements(By.css(".DollCardActions_like-btn__a19TH"));
    for (let i = 0; i < 50 && i < likeButtons.length; i++) {
      await likeButtons[0].click(); // Simulate a click on each "like" button
      console.log(`Liked post ${i + 1}`);
      await driver.sleep(200); // Sleep for 1 second between likes
    }

    console.log("Successfully logged in. Starting to follow people...");
    console.log("Simulating follow...");

    await driver.wait(until.elementLocated(By.css(".Home_follow-btn__0znhI")), 5000); // Wait for the "follow" button to be visible
    const followButtons = await driver.findElements(By.css(".Home_follow-btn__0znhI"));
    for (let i = 0; i < 50 && i < followButtons.length; i++) {
      await followButtons[i].click(); // Simulate a click on each "follow" button
      console.log(`Followed user ${i + 1}`);
      await driver.sleep(1000); // Sleep for 1 second between follows
    }

    // Close the browser
    await driver.quit();

  } catch (err) {
    console.error("Error during login test:", err);
    await driver.quit();
  }
})();
