import { MeanNg2Page } from './app.po';

describe('mean-ng2 App', function() {
  let page: MeanNg2Page;

  beforeEach(() => {
    page = new MeanNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
