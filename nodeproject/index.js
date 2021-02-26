const puppeteer = require('puppeteer');
const HTMLToPDF = require('html-to-pdf');

function abc() {
    puppeteer.launch({
        headless: true,
        args: ['--no-sandbox'],
    }).then(browser => {
        browser.pages().then(pages => {
            console.log(pages[1]);
            pages[1].screenshot({path: 'screenshot.png'}).then(res => {
                console.log('success');
            })
            browser.close().then(res => console.log('close'));
        })
    })
}

async function abc() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox']
    })
    const page = await browser.newPage();
    await page.goto('http://localhost:8000/app/builder?userId=01&auth=1234', {waitUntil: 'networkidle0'});
    await page.pdf({path: "myexport.pdf", format: "A4", printBackground: true});
}

abc().then(res =>{
    console.log(res);
})
