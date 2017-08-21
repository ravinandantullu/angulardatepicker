import { AngulardatepickerPage } from './app.po';

describe('angulardatepicker App', () => {
  let page: AngulardatepickerPage;

  beforeEach(() => {
    page = new AngulardatepickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
