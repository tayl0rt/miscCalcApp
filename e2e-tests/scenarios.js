'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /investment_calc when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/investment_calc");
  });


  describe('investment_calc', function() {

    beforeEach(function() {
      browser.get('index.html#/investment_calc');
    });


    it('should render investment_calc when user navigates to /investment_calc', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
