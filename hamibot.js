auto.waitFor(); // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation

hamibot.postMessage(auto.rootInActiveWindow);
for (let i = 1; true; i++) {
    let button = text("抢单").findOnce();
    if (button) {
        toastLog("找到抢单按钮, x=" + button.bounds().centerX() + ", y=" + button.bounds().centerY());
        button.click();
    }
    let okButton = id("juw").text("确定").findOnce();
    if (okButton != null) {
        let [x, y] = [okButton.bounds().centerX(), okButton.bounds().centerY()];
        log("找到确定按钮: x=" + x + ", y=" + y);
        okButton.click();
        sleep(500);
        back();
    }
    else {
        let item = id("uu").findOnce(1); // The second item is the button that can refresh the page.
        if (item != null) {
            item.click();
        }
    }
    if (i % 1000 == 0) {
        log("已经执行了" + i + "次");
    }
}
