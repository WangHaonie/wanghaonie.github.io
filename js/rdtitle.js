var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/favicon.png");
        document.title = '人怎么走掉了啦啊喂 !? | ' + OriginTitle;
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/favicon.png");
        document.title = '嗯嗯, 欢迎回来~ | ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});