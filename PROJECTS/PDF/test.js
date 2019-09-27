const puppeteer = require("puppeteer");

var reportData =[
        {report : "node5:3000/?list_AFSS_states=1&runid=5d72c999a269b39b4d71d63a&sn=24", name : "Test_Stage=fft_repetitive-Scenario=FFT_repetitive"},
        {report : "node5:3000/?list_AFSS_states=1&runid=5d72ca237af205a0ea182940&sn=24", name : "Test_Stage=atp_vibe_Z-random-Scenario=ATP_vibe"},
        {report : "node5:3000/?list_AFSS_states=1&runid=5d72ca72efec436688fa0cd7&sn=24", name: "Test_Stage=qtp_temp_cycle-Scenario=Abbrev_2di"},
        {report : "node5:3000/?list_AFSS_states=1&runid=5d72ca73650615e0591c31cf&sn=24", name: "Test_Stage=fft_repetitive-Scenario=FFT_repetitive"},
                    ];

reportData.forEach(function(mydata){

(async () => {
                    const browser = await puppeteer.launch({
                          ignoreDefaultArgs: ['--disable-extensions']
                           });
                    const page = await browser.newPage();
                    await page.goto(mydata.report, {
                           timeout: 25000,
                           waitUntil: "networkidle2"
                           });
                    await page.pdf({
                           path: mydata.name,
                           format: "Letter",
                           printBackground: true
                           });

                    await browser.close();
        console.log("my data"+mydata.report);
});
});
