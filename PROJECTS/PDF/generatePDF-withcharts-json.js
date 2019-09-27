// Set dependencies

const puppeteer = require("puppeteer");


// "JSON" data example

data = '[{report : "node5:3000/?list_AFSS_states=1&runid=5d72c999a269b39b4d71d63a&sn=24", name :
        {report : "node5:3000/?list_AFSS_states=1&runid=5d72ca237af205a0ea182940&sn=24",
        {report : "node5:3000/?list_AFSS_states=1&runid=5d72ca72efec436688fa0cd7&sn=24",
        {report : "node5:3000/?list_AFSS_states=1&runid=5d72ca73650615e0591c31cf&sn=24}]';

// Set variables

var report = Object.keys(json[0]);
var reportName = '';

// Function to 'load JSON' data

function json2report() {
    let runid = Object.keys(json[0]);
}

runid.map(fundtion(id) {})

(async () => {
    const browser = await puppeteer.launch({
        ignoreDefaultArgs: ['--disable-extensions'],
    });
    const page = await browser.newPage();
    await page.goto("http://node5:3000/", {
        timeout: 0, 
        waitUntil: "networkidle2"
    });
    await page.pdf({
        path: "report.pdf",
        format: "Letter",
        printBackground: true
    });

    await browser.close();
});

})();