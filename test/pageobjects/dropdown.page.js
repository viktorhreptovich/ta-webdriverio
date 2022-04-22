const Page = require('./page');

class LoginPage extends Page {
  get #dropdown() { return $('#dropdown'); }
  #option(index) { return this.#dropdown.$$('option')[index]; }

  constructor() {
    super('/dropdown');
  }

  async selectOption(index) {
    await this.#dropdown.waitForDisplayed();
    await this.#dropdown.selectByIndex(index);
  }

  async optionShouldBeSelected(index) {
    await expect(this.#option(index)).toBeSelected();
  }
}

module.exports = new LoginPage();
