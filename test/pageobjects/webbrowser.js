const { alertIsPresent } = require('wdio-wait-for');

class WebBrowser {
  async shouldHaveUrl(url) {
    await expect(browser).toHaveUrl(url);
  }

  async alertShouldBeOpen(text) {
    await browser.waitUntil(alertIsPresent());

    if (text) {
      const alertText = await browser.getAlertText();
      await expect(alertText).toEqual(text);
    }
  }

  async acceptAlert() {
    await browser.acceptAlert();
  }

  async dismissAlert() {
    await browser.dismissAlert();
  }

  async sendAlertText(text) {
    await browser.sendAlertText(text);
  }
}

module.exports = new WebBrowser();
