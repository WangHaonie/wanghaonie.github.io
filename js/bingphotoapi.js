// 发送请求并处理返回的 JSON 数据
fetch('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US', { 
    mode: 'no-cors',
    headers: { 
        ':authority': 'cn.bing.com',
        ':method': 'GET',
        ':path': '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US',
        ':scheme': 'https',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br, zsdch',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Cache-Control': 'no-cache',
        'Cookie': '_EDGE_V=1; MUIDB=3CDC1867BA90670E29610B6EBBDA669E; MUID=3CDC1867BA90670E29610B6EBBDA669E; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=390D3685891843878ACA0EB152349DED&dmnchg=1; ANON=A=75C8ADBF2868A9F4D5026A07FFFFFFFF; MMCASM=ID=119F901C122742DBA52C5B5D4E9EC086; ABDEF=V=13&ABDV=13&MRB=1690865061716&MRNB=0; _UR=QS=0&TQS=0; _HPVN=CS=eyJQbiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiUCJ9LCJTYyI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiSCJ9LCJReiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiVCJ9LCJBcCI6dHJ1ZSwiTXV0ZSI6dHJ1ZSwiTGFkIjoiMjAyMy0wOC0wNFQwMDowMDowMFoiLCJJb3RkIjowLCJHd2IiOjAsIkRmdCI6bnVsbCwiTXZzIjowLCJGbHQiOjAsIkltcCI6Mn0=; _EDGE_S=SID=0F06778662566EE20DEC64E563786F4E; SUID=A; WLS=C=aa1648c630c4ca49&N=Haonie; _U=1nD5Zd7Y264CfDMG54EMN6fNA5BB-nncQwNlC-Tj4FurszrvDyTA2np-PVlyWEvzVBHRZiiE2Kxh20ALO1MK57ie_2aaYJuwAYWWMAw9H0bmTlddu-Sm5fkBRsjLAawzOlvKRgj3n0scjvXILmS2M-MVfMZ5D6YT80IRy1svMH_UClLC0z875US1wL0d3E5XxCjcRUVOF5tTq6swHRlMvkA; SRCHUSR=DOB=20230708&T=1691191883000; FP=u=d; ipv6=hit=1691195483883&t=4; SNRHOP=I=&TS=; _RwBf=mta=0&rc=39&rb=39&gb=0&rg=0&pc=36&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=2&l=2023-08-04T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=0&p=BINGCOPILOTWAITLIST&c=MR000T&t=1622&s=2023-05-03T06:23:11.8917634+00:00&ts=2023-08-04T23:35:04.0608528+00:00&rwred=0&wls=2&lka=0&lkt=0&TH=&dci=2&e=g8M4F3RP2rPraqZHOzKXAaERiwD9tAeMKgAPQ1EzDKh0oKggBqhiinKW35whj9h1-luE_fwfO9vzxSgezm6ltQ&A=; _SS=SID=0F06778662566EE20DEC64E563786F4E&R=39&RB=39&GB=0&RG=0&RP=36; SRCHHPGUSR=SRCHLANG=zh-Hans&PV=15.0.0&DM=1&THEME=1&CW=1440&CH=749&SCW=1425&SCH=3573&BRW=W&BRH=M&DPR=1.0&UTC=480&PR=1&HV=1691192101&PRVCW=1440&PRVCH=749&IG=B03B5D53B44745FAA19FBE256FAC0EC8&BZA=0&EXLTT=6; USRLOC=HS=1&ELOC=LAT=30.63857078552246|LON=104.08527374267578|N=%E6%AD%A6%E4%BE%AF%E5%8C%BA%EF%BC%8C%E5%9B%9B%E5%B7%9D%E7%9C%81|ELT=1|&BLOCK=TS=230804233504',
        'Pragma': 'no-cache',
        'Sec-Ch-Ua': '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
        'Sec-Ch-Ua-Arch': '"x86"',
        'Sec-Ch-Ua-Bitness': '64',
        'Sec-Ch-Ua-Full-Version': '"115.0.1901.188"',
        'Sec-Ch-Ua-Full-Version-List': '"Not/A)Brand";v="99.0.0.0", "Microsoft Edge";v="115.0.1901.188", "Chromium";v="115.0.5790.114"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Model': '""',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Ch-Ua-Platform-Version': '"15.0.0"',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Sec-Ms-Gec': '2915655AA66F291D4171E0DFC6D420AA7B5F0021DC6B4C4622C7506AD2C8AEF0',
        'Sec-Ms-Gec-Version': '1-115.0.1901.188',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188',
        'X-Client-Data': 'eyIxIjoiMTciLCIxMCI6IiIsIjIiOiIxIiwiMyI6IjAiLCI0IjoiODY5NDUzMjc4MDc4MDI2MjQzMCIsIjUiOiJcInJpQ3VZR2MyR0plbWhHdzUvNDhMNmxSdzhpdnZOQnIxa2s4S0l4L1g2RE09XCIiLCI2Ijoic3RhYmxlIiwiNyI6IjYxNDYwOTgyMDA1NzkiLCI5IjoiZGVza3RvcCJ9',
        'X-Edge-Shopping-Flag': '1'
    },
})
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