const Page = require('./page');

class AlertsPage extends Page {
  get #alertButton() { return $('ul > li:nth-child(1) > button'); }
  get #confirmButton() { return $('ul > li:nth-child(2) > button'); }
  get #promptButton() { return $('ul > li:nth-child(3) > button'); }
  get #result() { return $('#result'); }

  constructor() {
    super('/javascript_alerts');
  }

  async clickAlertButton() {
    await this.#alertButton.waitForDisplayed();
    await this.#alertButton.click();
  }

  async clickConfirmButton() {
    await this.#confirmButton.waitForDisplayed();
    await this.#confirmButton.click();
  }

  async clickPromptButton() {
    await this.#promptButton.waitForDisplayed();
    await this.#promptButton.click();
  }

  async resultAlertShouldHaveText(result) {
    await expect(this.#result).toHaveText(result);
  }
}

module.exports = new AlertsPage();
