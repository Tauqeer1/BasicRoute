import { BasicRouteAppPage } from './app.po';

describe('basic-route-app App', function() {
  let page: BasicRouteAppPage;

  beforeEach(() => {
    page = new BasicRouteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
