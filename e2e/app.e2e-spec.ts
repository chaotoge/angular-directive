import { AngularDirectivePage } from './app.po';

describe('angular-directive App', () => {
  let page: AngularDirectivePage;

  beforeEach(() => {
    page = new AngularDirectivePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
