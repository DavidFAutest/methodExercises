const checkBoxPage = require('../pageobjects/checkbox.page');


describe('My clicker application', () => {
    it('should call the click rapidly method', async () => {
        await checkBoxPage.open();

        await browser.pause(5000);
        
        await checkBoxPage.checkClick();
        
    });
});


