auto.waitFor(); // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation

hamibot.postMessage(auto.rootInActiveWindow);
let items = id("uu").find(); // The second item is the button that can refresh the page.
let len = items.length;
if (len == 0) {
    toastLog("没有找到货源大厅按钮,请检查当前是否为货源大厅界面!");
    hamibot.exit();
}
toastLog("found " + len + " items!");
for (let i = 1; true; i++) {
    if (i % 1000 == 0) {
        log("已经执行了" + i + "次");
    }
    click("抢单", 0);
    let okButton = id("juw").text("确定").findOne(10);
    if (okButton != null) {
        let [x, y] = [okButton.bounds().centerX(), okButton.bounds().centerY()];
        log("找到确定按钮: x=" + x + ", y=" + y);
        click(okButton);
        sleep(500);
        back();
    }
    else {
        click("货源大厅", 0);
    }
}
