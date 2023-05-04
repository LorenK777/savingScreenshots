import dynamicPage from "../pageobjects/dynamic_loading.page.js";

describe('My Dynamic Page Screenshot', () => {
    it('Open page and get screenshots', async () => {
        await dynamicPage.open();
        await browser.saveScreenshot('./test/images/openScreenshot.png');
        await dynamicPage.startbutton.click();
        await browser.pause(3000);
        await dynamicPage.h4header.waitForExist();
        await browser.saveScreenshot('./test/images/openScreenshot2.png');
  
    })
})