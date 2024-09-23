describe("Navigation Menu", () => {
    it("Get all navigational menu items and assert them", async () => {
      // Navigate to URL
      await browser.url("/");
      const links = await $$('//ul[@id="zak-primary-menu"]/li[contains(@id,"menu")]');
      const actualLinks = [];
      const expectedLinks=["Home","About","Shop","Blog","Contact", "My account"]
      for( let lnk of links)
        {
            console.log("aaa:",await lnk.getText());
            let txt= await lnk.getText();
            await actualLinks.push(txt);
        }
        await expect(expectedLinks).toEqual(actualLinks);
    });
});
