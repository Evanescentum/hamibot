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
    if (i % 100 == 0) {
        hamibot.postMessage("已经执行了" + i + "次");
    }
    items[1].click() // Refresh the page.
    let button = className("Button").text("抢单").findOne(50); // Search for the button.
    if (button) {
        button.click();
        toastLog("点击抢单");
        sleep(20); // Wait for the new page to load.
        while (true) {
            let button2 = className("Button").text("抢单").findOne(20); // Search for the second button.
            log(button2);
            if (button2) {
                button2.click();
                let okButton = id("juw").text("确定").findOne(30);
                log("okButton: " + okButton);
                if (okButton) {
                    okButton.click();
                    toastLog("点击确定");
                    back();
                    break;
                }
            }
        }
    } // If the button is not found, the page is refreshed again.
}
