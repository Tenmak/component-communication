import { Ng2CliSeedPage } from './app.po';

describe('ng2-cli-seed App', () => {
  let page: Ng2CliSeedPage;

  beforeEach(() => {
    page = new Ng2CliSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
