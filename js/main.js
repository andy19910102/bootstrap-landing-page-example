// 網頁的主程式寫在這裡
// 綁定 .ad-toggle-btn 的點擊事件
$(".ad-toggle-btn").click(function () {
    console.log("[.ad-toggle-btn被點擊了]");

});

// 綁定 #removeSideBoxBtn 的點擊事件
$("#removeSideBoxBtn").click(function () {
    console.log("[#removeSideBoxBtn被點擊了]")

});

// 取得現在的年份
const year = new Date().getFullYear();
// 將年份顯示在 id="yearShow" 的元素內
$("#yearShow").text(year);