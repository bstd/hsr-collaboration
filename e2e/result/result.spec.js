'use strict';

describe('Result', function() {
  var page,
      resultUrl = '/result',
      queryUrl = '/result?query=st';

  beforeEach(function() {
    page = require('./result.po');
  });

  it('should have title "Suchresultate" and show "Keine Resultate gefunden."', function() {
    browser.get(resultUrl);
    expect(browser.getTitle()).toEqual('Suchresultate');
    expect(page.resultParagraph.isPresent()).toBe(true);
    var t1 = page.resultParagraph.getText().then(function(txt) {
      expect(txt).toEqual('Keine Resultate gefunden.');
    });

    expect(page.linkToStart.isPresent()).toBe(true);
    var t2 = page.linkToStart.getText().then(function(txt) {
      expect(txt.toLowerCase()).toEqual('zur startseite');
    });
  });

  it('should find results for query "st"', function() {
    browser.get(queryUrl);
    expect(page.resultH1.isPresent()).toBe(true);
    var t1 = page.resultH1.getText().then(function(txt) {
      expect(txt).toEqual('Suchresultate: st');
    });
  });
});
