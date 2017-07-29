import { PasswdGeneratorPage } from './app.po';

describe('passwd-generator App', () => {
  let page: PasswdGeneratorPage;

  beforeEach(() => {
    page = new PasswdGeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
