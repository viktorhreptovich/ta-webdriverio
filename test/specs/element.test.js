const internetPage = require('../pageobjects/internet.page');

describe('Element state', () => {
  it('Page should have title', async () => {
    await internetPage.open();
    await internetPage.titleShouldHaveText('Welcome to the-internet');
  });

  it('Header should exist', async () => {
    await internetPage.open();
    await internetPage.headerShouldExist();
  });

  it('Header should be displayed in viewport', async () => {
    await internetPage.open();
    await internetPage.headerShouldBeDisplayedInViewport();
  });

  it('Footer should be displayed', async () => {
    await internetPage.open();
    await internetPage.footerShouldBeVisible();
  });

  it('Footer should not be displayed in viewport', async () => {
    await internetPage.open();
    await internetPage.footerShouldNotBeDisplayedInViewport();
  });
});
