const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking the Draw button displays the div with id = “choices”", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.css("#draw")).click();
    const choicesDiv = await driver.wait(until.elementLocated(By.css("#choices")), 1000);
    expect(await choicesDiv.isDisplayed()).toBeTruthy();
  });

  test("clicking an “Add to Duo” button displays the div with id = “player-duo”", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.css("#draw")).click();
    await driver.findElement(By.css(".bot-btn")).click();
    const playerDuoDiv = await driver.wait(until.elementLocated(By.css("#player-duo")), 1000);
    expect(await playerDuoDiv.isDisplayed()).toBeTruthy();
  });

  test("clicking the See All Bots button displays the div with id = “all-bots”", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.css("#see-all")).click();
    const botsDiv = await driver.wait(until.elementLocated(By.css("#all-bots")), 1000);
    expect(await botsDiv.isDisplayed()).toBeTruthy();
  });
});