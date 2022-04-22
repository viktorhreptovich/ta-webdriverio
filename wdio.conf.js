exports.config = {
  specs: [
    './test/specs/**/alert.test.js'
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub/',
  protocol: 'http',
  capabilities: [{
    browserName: 'chrome',
    acceptInsecureCerts: true
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://the-internet.herokuapp.com/',
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  },
  before: () => {
    // eslint-disable-next-line global-require
    require('expect-webdriverio').setOptions({ wait: 10000, interval: 200 });
  }
};
