import { AngularForumPage } from './app.po';

describe('angular-forum App', () => {
  let page: AngularForumPage;

  beforeEach(() => {
    page = new AngularForumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
