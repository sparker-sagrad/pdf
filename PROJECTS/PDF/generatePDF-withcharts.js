const puppeteer = require("puppeteer");

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
})();