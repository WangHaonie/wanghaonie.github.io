// 发送请求并处理返回的 JSON 数据
fetch('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US', { mode: 'no-cors'})
  .then(response => response.json())
  .then(data => {
    const photoUrl = data.images.url; // 获取返回 JSON 数据中的 URL 值

    // 替换网页中所有出现的 /img/default.png
    const elements = document.getElementsByTagName('img');
    Array.from(elements).forEach(element => {
      const imageUrl = element.src;

      if (imageUrl.includes('/img/default.png')) {
        element.src = imageUrl.replace('/img/default.png', 'https://cn.bing.com' + photoUrl);
      }
    });
  })

  .catch(error => {
    console.error('请求出错:', error);
  });