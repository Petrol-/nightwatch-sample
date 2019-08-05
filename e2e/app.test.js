module.exports = {
    'Test button OK' : function (browser) {
      browser
        .url('http://localhost:4200')
        .waitForElementVisible('body')

        .click('#btn-ok')
        .pause(100)
        .assert.containsText('#message', 'OK')
        .end();
    }
  };