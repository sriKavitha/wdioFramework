import AllureReporter from "@wdio/allure-reporter";
describe('iFrame', () => {
    it('Verify Logo exists in iFrame', async () => {
        AllureReporter.addSeverity('Critical');
        AllureReporter.addDescription('iFrames are part of this page...');
        await browser.url('/iframe-sample/');
        
        // Ensure iframe exists before switching
        const iframe = await $('#advanced_iframe');
        await iframe.waitForExist({ timeout: 10000 });
        
        // Switch to iframe
        await browser.switchToFrame(iframe);
        console.log(await browser.getPageSource()); // Log the page source inside the iframe

        // Introduce a pause to ensure iframe content loads
        await browser.pause(5000);

        // Verify if the element exists after a pause
        const ele = await $('//h1[contains(text(),"Master Software")]');
        
        // Directly use .isExisting() method
        const isExisting = await ele.isExisting();
        console.log("Element existence status:", isExisting);

        // Assert the existence
        expect(isExisting).toBe(true);

        // Switch back to parent frame
        await browser.switchToParentFrame();
        
    });
});
