import { Ng2reduxSample2Page } from './app.po';

describe('ng2redux-sample2 App', function() {
  let page: Ng2reduxSample2Page;

  beforeEach(() => {
    page = new Ng2reduxSample2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});