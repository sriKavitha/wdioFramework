// import navComponent from "../pages/components/nav-comp";
import HomePage from "../pages/home-page";
import allureReporter from '@wdio/allure-reporter';

describe('Navigation Menu', () => {
  // before(async () =>{
  //    await browser.maximizeWindow();
  //   });

    it('Get the text of all menu items & assert them', async () => {
      allureReporter.addFeature('<Navigation Menu>');
      allureReporter.addDescription('Navigation links in the site...');
      allureReporter.addSeverity('Critical');
      await HomePage.navigateHome();
  
      const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account",
      ];
  
      const actualLinks = [];
  
    //   const navLinks = await $$('#zak-primary-menu li[id*=menu]');
        const navLinks = await HomePage.NavComponent.navMenuLinks;
  
      for (const link of navLinks) {
        actualLinks.push(await link.getText());
      }
  
      await expect(expectedLinks).toEqual(actualLinks);
    });
  
    it('Get the text of all menu items & assert them - using wait commands', async () => {
      // hardcoded timeout
      // browser.pause(1000);
  
      await HomePage.navigateHome();
  
      const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account",
      ];
  
      const actualLinks = [];
  
      // await $('#primary-menu .menu-item.tg-header-button-wrap').waitForDisplayed({ timeout: 2000 });
  
      // wait until the Home text is displayed on the navigation menu
      await browser.waitUntil(async function () {
        const homeText = await HomePage.NavComponent.NavMenuFirstLink.getText(); // Home
        return homeText === "Home"; // true | false
      }, {
        timeout: 5000,
        timeoutMsg: 'Could not verify the Home text from #primary-menu li'
      });
  
      const navLinks = await $$('#zak-primary-menu li[id*=menu]');
  
      for (const link of navLinks) {
        actualLinks.push(await link.getText());
      }
  
      await expect(actualLinks).toEqual(expectedLinks);
    });
  });