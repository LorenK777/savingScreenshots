import Page from './page.js';

class dynamicPage extends Page {


    // get  () {
    //     return $('#username');
    // }

    get startbutton () {
        return $('//*[@id="start"]/button');
    }

    get h4header () {
        return $('//*[@id="finish"]/h4');
    }
    
    open () {
        return super.open('dynamic_loading/2');
    }

}

export default new dynamicPage();
