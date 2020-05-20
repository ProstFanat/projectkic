const webdriver = require('selenium-webdriver');
let assert = require('chai').assert;

describe('ProjectKin', () => {
    describe('Test of buying', () => {
        it('Positive test', async function(){
            this.timeout(0);
            let driver = await new webdriver.Builder().forBrowser('firefox').build();
            await driver.get('https://staging-projectkintravel.kinsta.cloud/?v=dd65ef9a5579');
            await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/section[1]/div/div/div/div/div/div[3]/div/div/a')), 10000);
                await driver.findElement(webdriver.By.id('cookie_action_close_header')).click();    
                await driver.findElement(webdriver.By.xpath('/html/body/div[2]/div/div/section[1]/div/div/div/div/div/div[3]/div/div/a')).click();
            await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/section[5]/div/div/div/div/div/div/div/div/section/div/div/div[1]/div/div/div/div/div/ul/li/a[1]')));
                await driver.findElement(webdriver.By.id('cookie_action_close_header')).click();
                await driver.findElement(webdriver.By.xpath('/html/body/div[2]/div/div/section[5]/div/div/div/div/div/div/div/div/section/div/div/div[1]/div/div/div/div/div/ul/li/a[1]')).click();
            await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[3]/div/div/section[1]/div/div/div[2]/div/div/div[6]/div/div/form/div/div[2]/button')));
                await driver.findElement(webdriver.By.xpath('/html/body/div[3]/div/div/section[1]/div/div/div[2]/div/div/div[6]/div/div/form/div/div[2]/button')).click();
            await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[3]/div/div/section[1]/div/div/div[2]/div/div/div[6]/div/div/form/div/div[2]/a')));
                await driver.findElement(webdriver.By.xpath('/html/body/div[3]/div/div/section[1]/div/div/div[2]/div/div/div[6]/div/div/form/div/div[2]/a')).click();
            
            await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/main/div/div[1]/div/div/section[1]/div/div/div/div/div/div[1]/div/div/div/div/div/div/div/section[3]/div/div/div/div/div/div/div/div/div/a')));
                await driver.findElement(webdriver.By.xpath('/html/body/main/div/div[1]/div/div/section[1]/div/div/div/div/div/div[1]/div/div/div/div/div/div/div/section[3]/div/div/div/div/div/div/div/div/div/a')).click();
                await driver.findElement(webdriver.By.id('shipping_first_name')).sendKeys('Test');
                await driver.findElement(webdriver.By.id('shipping_last_name')).sendKeys('test');
                await driver.findElement(webdriver.By.id('shipping_address_1')).sendKeys('testova');
                await driver.findElement(webdriver.By.id('shipping_city')).sendKeys('test');
                await driver.findElement(webdriver.By.id('shipping_postcode')).sendKeys('67656');
                await driver.findElement(webdriver.By.id('shipping_phone')).sendKeys('380960649682');
                await driver.findElement(webdriver.By.id('shipping_email')).sendKeys('test@mail.com');
            await driver.findElement(webdriver.By.id('argmc-next')).click();    
            
                await assert.equal(await driver.getCurrentUrl(), 'https://projectkintravel.com/checkout/')
            await driver.close()
         });
    });

    describe('Test of Join our Kin', async function() {
        it('positive test', async function() {
            this.timeout(0);
            let driver = await new webdriver.Builder().forBrowser('firefox').build();
            await driver.get('https://staging-projectkintravel.kinsta.cloud/?v=0b8e29c43749');
            await driver.wait(webdriver.until.elementLocated(webdriver.By.name('FNAME')), 10000);
            await driver.findElement(webdriver.By.id('cookie_action_close_header')).click();
            await driver.findElement(webdriver.By.name('FNAME')).sendKeys('Test');
            await driver.findElement(webdriver.By.name('EMAIL')).sendKeys('test@mail.com');
            await driver.findElement(webdriver.By.xpath('/html/body/div[2]/div/div/section[3]/div/div/div[2]/div/div/div[3]/div/form/div[1]/p[3]/input')).click();
            await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('/html/body/div[2]/div/div/section[3]/div/div/div[2]/div/div/div[3]/div/form/div[2]/div/div/p')));
            await driver.close();
        })
    })
})

