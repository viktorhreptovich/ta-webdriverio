const Page = require('./page');

class LoginPage extends Page {
  get #username() { return $('#username'); }
  get #password() { return $('#password'); }

  constructor() {
    super('/login');
  }

  async enterUsername(username) {
    await this.#username.waitForDisplayed();
    await this.#username.setValue(username);
  }

  async clearUsername() {
    await this.#username.clearValue();
  }

  async usernameShouldHaveValue(username) {
    await expect(this.#username).toHaveValue(username);
  }

  async enterPassword(username) {
    await this.#password.waitForDisplayed();
    await this.#password.setValue(username);
  }

  async clearPassword() {
    await this.#password.clearValue();
  }

  async passwordShouldHaveValue(password) {
    await expect(this.#password).toHaveValue(password);
  }
}

module.exports = new LoginPage();
