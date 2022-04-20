

const clickPage = require('./clickpage');

class checkBoxPage extends clickPage {
    
    get button () {
        return $('.rbutton*=Click Here');
    }

    async checkClick () {
        
        for (let i = 0; i < 100; i++) {
            this.button.click();
        }
        
        await this.button.click();
        await browser.pause(500);
    }

    open () {
        return super.open('checkboxes');
    }
}

module.exports = new checkBoxPage();
