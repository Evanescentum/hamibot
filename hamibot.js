auto.waitFor(); // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation

while (true) {
    let button = className("Button").text("抢单").findOne(20);
    if (button) {
        log("抢单按钮存在");
        log(button);
        button.click();
    }
}
