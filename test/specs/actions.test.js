const internetPage = require('../pageobjects/internet.page');
const loginPage = require('../pageobjects/login.page');
const hoversPage = require('../pageobjects/hovers.page');
const dropdownPage = require('../pageobjects/dropdown.page');
const webbrowser = require('../pageobjects/webbrowser');

describe('Element actions', () => {
  it('Click link', async () => {
    await internetPage.open();
    await internetPage.clickLink(1);
    await webbrowser.shouldHaveUrl('http://the-internet.herokuapp.com/abtest');
  });

  it('Enter text', async () => {
    await loginPage.open();
    await loginPage.enterUsername('Viktor');
    await loginPage.usernameShouldHaveValue('Viktor');
    await loginPage.enterPassword('Pass');
    await loginPage.passwordShouldHaveValue('Pass');
  });

  it('Clear text', async () => {
    await loginPage.open();
    await loginPage.enterUsername('Viktor');
    await loginPage.clearUsername();
    await loginPage.usernameShouldHaveValue('');
    await loginPage.enterPassword('Pass');
    await loginPage.clearPassword();
    await loginPage.passwordShouldHaveValue('');
  });

  it('Hover figure', async () => {
    await hoversPage.open();
    await hoversPage.hoverFigure(2);
    await hoversPage.figureDetailsShouldBeVisible(2);
    await hoversPage.figureDetailsShouldHaveText(2, 'name: user2');
  });

  it('Scroll to footer', async () => {
    await internetPage.open();
    await internetPage.footerShouldNotBeDisplayedInViewport();
    await internetPage.scrollToFooter();
    await internetPage.footerShouldBeDisplayedInViewport();
  });

  it('Select dropdown options', async () => {
    await dropdownPage.open();
    await dropdownPage.selectOption(1);
    await dropdownPage.optionShouldBeSelected(1);
    await dropdownPage.selectOption(2);
    await dropdownPage.optionShouldBeSelected(2);
  });
});
