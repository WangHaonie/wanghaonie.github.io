/* WangHaonie 亲手打造，用于跳转到到对应分站 - v1.0.0*/

/* 跳转到到 GitHub Pages */
function redir2gh() {
    window.location.href = "https://wanghaonie.github.io" + window.location.pathname;
  }

/* 跳转到到 本地局域网 */
function redir2lan() {
    window.location.href = "http://10.0.0.10:4000" + window.location.pathname;
  }

/* 跳转到到 Vercel */
function redir2v() {
    window.location.href = "https://wanghaonie.vercel.app" + window.location.pathname;
  }

/* 跳转到到 Netlify */
function redir2n() {
    window.location.href = "http://wanghaonie.netlify.app" + window.location.pathname;
  }