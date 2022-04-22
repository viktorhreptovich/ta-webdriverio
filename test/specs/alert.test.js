const alertsPage = require('../pageobjects/alerts.page');
const webBrowser = require('../pageobjects/webbrowser');

describe('Javascript Alerts', () => {
  it('Get text of alert', async () => {
    await alertsPage.open();
    await alertsPage.clickAlertButton();
    await webBrowser.alertShouldBeOpen('I am a JS Alert');
  });

  it('Accept alert', async () => {
    await alertsPage.open();
    await alertsPage.clickAlertButton();
    await webBrowser.acceptAlert();
    await alertsPage.resultAlertShouldHaveText('You successfully clicked an alert');
  });

  it('Accept confirm alert', async () => {
    await alertsPage.open();
    await alertsPage.clickConfirmButton();
    await webBrowser.acceptAlert();
    await alertsPage.resultAlertShouldHaveText('You clicked: Ok');
  });

  it('Dismiss confirm alert', async () => {
    await alertsPage.open();
    await alertsPage.clickConfirmButton();
    await webBrowser.dismissAlert();
    await alertsPage.resultAlertShouldHaveText('You clicked: Cancel');
  });

  it('Send text to prompt alert and accept', async () => {
    await alertsPage.open();
    await alertsPage.clickPromptButton();
    await webBrowser.sendAlertText('Test text');
    await webBrowser.acceptAlert();
    await alertsPage.resultAlertShouldHaveText('You entered: Test text');
  });

  it('Send text to prompt alert and dismiss', async () => {
    await alertsPage.open();
    await alertsPage.clickPromptButton();
    await webBrowser.sendAlertText('Test text');
    await webBrowser.dismissAlert();
    await alertsPage.resultAlertShouldHaveText('You entered: null');
  });
});
