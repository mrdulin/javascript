// ==UserScript==
// @name         构建状态通知
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ship发布系统发布单应用构建状态完成通知
// @author       You
// @match        https://ship.zhonganinfo.com/publish/project/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  new MutationObserver(function (mutations) {
    if (document.querySelector(".publish-table")) {
      this.disconnect();
    } else {
      return;
    }

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function spawnNotification(title, body, icon) {
      var options = {
        body: body,
        icon: icon,
      };
      var n = new Notification(title, options);
    }

    const stopConditions = ["构建完成", "构建失败"];

    async function watch() {
      const tableBodyCells = document.querySelectorAll(
        ".publish-table .ant-table-tbody .ant-table-cell"
      );
      const buildStatusElement = tableBodyCells[5];
      console.log(buildStatusElement);
      for (;;) {
        await sleep(1000);
        if (stopConditions.includes(buildStatusElement.textContent)) {
          spawnNotification(buildStatusElement.textContent);
          console.log(buildStatusElement.textContent);
          break;
        }
      }
    }

    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      watch();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          watch();
        }
      });
    } else {
      console.log("You should grant premission for notification");
    }
  }).observe(document, {
    childList: true,
    subtree: true,
  });
})();
