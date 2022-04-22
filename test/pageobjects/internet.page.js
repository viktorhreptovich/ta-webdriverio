const Page = require('./page');

class InternetPage extends Page {
  get #header() { return $('h1.heading'); }
  get #footer() { return $('#page-footer'); }
  #link(index) { return $$('ul li a')[index - 1]; }

  constructor() {
    super('/');
  }

  async titleShouldHaveText(text) {
    await expect(this.#header).toHaveText(text);
  }

  async headerShouldExist() {
    await expect(this.#header).toExist();
  }

  async headerShouldBeDisplayedInViewport() {
    await expect(this.#header).toBeDisplayedInViewport();
  }

  async footerShouldBeVisible() {
    await expect(this.#footer).toBeDisplayed();
  }

  async footerShouldBeDisplayedInViewport() {
    await expect(this.#footer).toBeDisplayedInViewport();
  }

  async footerShouldNotBeDisplayedInViewport() {
    await expect(this.#footer).not.toBeDisplayedInViewport();
  }

  async scrollToFooter() {
    await this.#footer.scrollIntoView(false);
  }

  async clickLink(index) {
    await this.#link(index).click();
  }
}

module.exports = new InternetPage();
