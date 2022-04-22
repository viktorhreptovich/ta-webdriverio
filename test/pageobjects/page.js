class Page {
  constructor(path) {
    this.path = path;
  }

  async open() {
    await browser.url(this.path);
  }
}

module.exports = Page;
