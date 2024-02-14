function updateSiteRuntime() {
    var siteStartDate = new Date("2022-04-30 09:32:50");
    var currentDate = new Date();

    var timeDiff = currentDate.getTime() - siteStartDate.getTime();
    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    var runtimeDisplay = "本站已悄声息地运行了" + days + "天" + hours.toString().padStart(2, '0') + "时" + minutes.toString().padStart(2, '0') + "分" + seconds.toString().padStart(2, '0') + "秒";
    document.getElementById("site-runtime").textContent = runtimeDisplay;
}
setInterval(updateSiteRuntime, 1000);