/* global Feature, Scenario, Given, When, Then, And */

const puppeteer = require("puppeteer");
const { expect } = require("chai");

const opts = {
  headless: true,
  slowMo: 250,
  timeout: 10000
};

Feature("Simple calculator", () => {
  let page;
  let browser;

  before(async () => {
    browser = await puppeteer.launch(opts);
    page = await browser.newPage();
  });

  after(async () => {
    await page.close();
  });

  Scenario("calculating", () => {
    Given("a page with a simple calculator", async () => {
      await page.goto("http://localhost:3000", {
        waitUntil: ["load", "domcontentloaded"]
      });
    });

    When("writing in the first input", async () => {
      await page.type("#app > div > div:nth-child(1) > input", "1");
    });

    Then('result should show "Result: 1"', async () => {
      const result = await page.$eval("#result", el => el.innerText);
      expect(result).to.equal("Result: 1");
    });

    When("writing in the second input", async () => {
      await page.type("#app > div > div:nth-child(2) > input", "20");
    });

    And("writing in the third input", async () => {
      await page.type("#app > div > div:nth-child(3) > input", "30");
    });

    Then('result should show "Result: 51"', async () => {
      const result = await page.$eval("#result", el => el.innerText);
      expect(result).to.equal("Result: 51");
    });

    When('changing operator to "MULTIPLY"', async () => {
      await page.click(
        "#app > div > div:nth-child(4) > span:nth-child(2) > input[type='radio']"
      );
    });

    Then('result should show "Result: 600"', async () => {
      const result = await page.$eval("#result", el => el.innerText);
      expect(result).to.equal("Result: 600");
    });
  });
});
