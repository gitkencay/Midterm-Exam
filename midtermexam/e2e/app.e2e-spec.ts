import { MidtermexamPage } from './app.po';

describe('midtermexam App', function() {
  let page: MidtermexamPage;

  beforeEach(() => {
    page = new MidtermexamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
