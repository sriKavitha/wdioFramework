//import HomePage from "../pages/home-page";
import HomePage from '../pages/home-page';
import AllureReporter from '@wdio/allure-reporter';
// import HopePage from 
describe("Home", () => {
  beforeEach(async() =>{
    // Navigate to URL
     await HomePage.navigateHome();
  })
  
  it("Open URL and assert title", async () => {
    AllureReporter.addSeverity('Medium');
    // Assert title
    await expect(browser).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
  });

  it("Navigate to About page and assert URL", async () => {

    // Navigate to the About page
    await browser.url("/about");
    // Assert URL
    await expect(browser).toHaveUrl("https://practice.sdetunicorns.com/about/");
  });

  it('Click on get Start button and verify URL contains get started text', async () => {

    // Click on the Get Started button
    await HomePage.getStarted.click();

    // Assert that URL contains 'get-started'
    await expect(browser).toHaveUrl(expect.stringContaining('get-started'));
  });

  it('Click Logo Button & Assert URL does not contain Get Started Text', async () => {
    AllureReporter.addSeverity('Medium');
    await HomePage.logo.click();
    await expect(browser).not.toHaveUrl(expect.stringContaining('get-started'));
  });

  it('Find the heading element and assert the heading text', async () => {

    const ele = await  HomePage.headingEle;
    const actualText = await HomePage.headingEle.getText();
    const expectedText = "Think different. Make different.";

    // method1: Assert heading h1 text 
    await expect(actualText).toEqual(expectedText);
    // method2: Assert heading h1 text 
    await expect(ele).toHaveText(expectedText);
  });
});