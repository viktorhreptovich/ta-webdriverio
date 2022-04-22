const Page = require('./page');

class HoversPage extends Page {
  #figure(index) { return $$('.example .figure')[index - 1]; }
  #figureDetails(index) { return this.#figure(index).$('.figcaption h5'); }

  constructor() {
    super('/hovers');
  }

  async hoverFigure(index) {
    await this.#figure(index).waitForDisplayed();
    await this.#figure(index).moveTo(1, 1);
  }

  async figureDetailsShouldBeVisible(index) {
    await expect(this.#figureDetails(index)).toBeDisplayed();
  }

  async figureDetailsShouldHaveText(index, text) {
    await expect(this.#figureDetails(index)).toHaveText(text);
  }
}

module.exports = new HoversPage();
