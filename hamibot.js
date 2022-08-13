auto.waitFor(); // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation

let i = 1;
while (true) {
    let button = className("Button").text("抢单").findOne(20);
    if (button) {
        log(button);
        button.click();
        toastLog("点击抢单" + i++);
    }
}
