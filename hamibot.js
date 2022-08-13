auto.waitFor(); // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation

hamibot.postMessage(auto.rootInActiveWindow);
for (let i = 1; true; i++) {
    let button = text("抢单").findOne(10);
    if (button) {
        toastLog("找到抢单按钮, x=" + button.bounds().centerX() + ", y=" + button.bounds().centerY());
        button.click();
    }
    let okButton = id("juw").text("确定").findOne(10);
    if (okButton != null) {
        let [x, y] = [okButton.bounds().centerX(), okButton.bounds().centerY()];
        log("找到确定按钮: x=" + x + ", y=" + y);
        okButton.click();
        sleep(500);
        back();
    }
    else {
        let items = id("uu").find();
        if (items.length != 0) {
            items[1].click(); // The second item is the button that can refresh the page.
        }
    }
    if (i % 1000 == 0) {
        log("已经执行了" + i + "次");
    }
}
