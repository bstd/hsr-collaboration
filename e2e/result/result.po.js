'use strict';

var ResultPage = function() {
  this.resultParagraph = $('md-content.md-padding p');
  this.resultH1 = $('h1');
  this.linkToStart = $('a.md-primary');
};

module.exports = new ResultPage();
