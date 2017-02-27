import { AngularAlgoliaPage } from './app.po';

describe('angular-algolia App', () => {
  let page: AngularAlgoliaPage;

  beforeEach(() => {
    page = new AngularAlgoliaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
