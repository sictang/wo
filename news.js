const newsCookie = 'newsCookie'

//签到
const signHeader = {
    method: 'POST',
    url: 'https://v6-gw.m.163.com/commons-user-incentive/api/v1/commons/incentive/doAction',
    headers: {
        'Host': 'v6-gw.m.163.com',
        'User-D': 'VBg/uXP4Z0TylKTvZb34IgiYzTUaoqdn3M6kHKMkDetsiq8efhvvgUDSUOxJnwEE',
        'User-U': read(newsCookie),
        'Accept': '*/*',
        'User-C': '5oiR',
        'X-NR-Trace-Id': '1607444835574_10795993360_05B74F33-701C-4787-9F5B-168734281495',
        'User-N': 'WMJEFhR9rRqgr30oX2W7DQ==',
        'Domain': 'v6-gw.m.163.com',
        'X-B3-SpanId': '0',
        'User-id': 'y76YOdDzNGi7eWubdcuxXFj2fisMkpT381eI5zJXRyyKQkBdUQzhbDKk39gE7Pm76p0Wjfrfa3tZPXEZTGDm5kx0IAprRVp+Jsn69qbj23yAzDRdr4mMRwGkxrjro/HcePBK0dNsyevylzp8V9OOiA==',
        'User-tk': 'xRFRFMVbj+0XbM2605q5PxjNMORTwTzFHDXv03MUCgMe+q/z6MDzXjA37FA+rNQA',
        'User-DA': '3L6U5IXvvnlZtkWO7Rgu0sAkSG0nV2/pudo5e5hcDdrIMPu0ldo8ooNFyTNsvBvE',
        'Accept-Language': 'zh-cn',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Length': '39',
        'User-Agent': 'NewsApp/74.1 iOS/14.2 (iPhone12,1)',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-B3-Sampled': '1'
    },
    body: 'targetId=3&targetType=sign&taskId=50001'
}

//阅读
const readHeader = {
    method: 'POST',
    url: 'https://b-gw.m.163.com/commons-user-incentive/api/v1/commons/incentive/doAction',
    headers: {
        'Host': 'b-gw.m.163.com',
        'User-D': 'VBg/uXP4Z0TylKTvZb34IgiYzTUaoqdn3M6kHKMkDetsiq8efhvvgUDSUOxJnwEE',
        'User-U': read(newsCookie),
        'Accept': '*/*',
        'User-C': '5aS05p2h',
        'X-NR-Trace-Id': '1607444835574_10795993360_05B74F33-701C-4787-9F5B-168734281495',
        'User-N': 'WMJEFhR9rRqgr30oX2W7DQ==',
        'Domain': 'b-gw.m.163.com',
        'X-B3-SpanId': '0',
        'User-id': 'y76YOdDzNGi7eWubdcuxXFj2fisMkpT381eI5zJXRyyKQkBdUQzhbDKk39gE7Pm76p0Wjfrfa3tZPXEZTGDm5kx0IAprRVp+Jsn69qbj23yAzDRdr4mMRwGkxrjro/HcePBK0dNsyevylzp8V9OOiA==',
        'User-tk': 'xRFRFMVbj+0XbM2605q5PxjNMORTwTzFHDXv03MUCgMe+q/z6MDzXjA37FA+rNQA',
        'User-DA': '3L6U5IXvvnlZtkWO7Rgu0sAkSG0nV2/pudo5e5hcDdrIMPu0ldo8ooNFyTNsvBvE',
        'Accept-Language': 'zh-cn',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Length': '53',
        'User-Agent': 'NewsApp/74.1 iOS/14.2 (iPhone12,1)',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-B3-Sampled': '1'
    },
    body: 'targetId=FTAJ5DAV0519AQ5J&targetType=doc&taskId=10000'
}

//视频
const videoHeader = {
    method: 'POST',
    url: 'https://v6-gw.m.163.com/commons-user-incentive/api/v1/commons/incentive/doAction',
    headers: {
        'Host': 'v6-gw.m.163.com',
        'User-D': 'VBg/uXP4Z0TylKTvZb34IgiYzTUaoqdn3M6kHKMkDetsiq8efhvvgUDSUOxJnwEE',
        'User-U': read(newsCookie),
        'Accept': '*/*',
        'User-C': '5aS05p2h',
        'X-NR-Trace-Id': '1607444835574_10795993360_05B74F33-701C-4787-9F5B-168734281495',
        'User-N': 'WMJEFhR9rRqgr30oX2W7DQ==',
        'Domain': 'v6-gw.m.163.com',
        'X-B3-SpanId': '0',
        'User-id': 'y76YOdDzNGi7eWubdcuxXFj2fisMkpT381eI5zJXRyyKQkBdUQzhbDKk39gE7Pm76p0Wjfrfa3tZPXEZTGDm5kx0IAprRVp+Jsn69qbj23yAzDRdr4mMRwGkxrjro/HcePBK0dNsyevylzp8V9OOiA==',
        'User-tk': 'xRFRFMVbj+0XbM2605q5PxjNMORTwTzFHDXv03MUCgMe+q/z6MDzXjA37FA+rNQA',
        'User-DA': '3L6U5IXvvnlZtkWO7Rgu0sAkSG0nV2/pudo5e5hcDdrIMPu0ldo8ooNFyTNsvBvE',
        'Accept-Language': 'zh-cn',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Length': '48',
        'User-Agent': 'NewsApp/74.1 iOS/14.2 (iPhone12,1)',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-B3-Sampled': '1'
    },
    body: 'targetId=VLSB1NJO0&targetType=video&taskId=10001'
}

//发贴
const postHeader = {
    method: 'POST',
    url: 'https://v6-gw.m.163.com/commons-user-incentive/api/v1/commons/incentive/doAction',
    headers: {
        'Host': 'v6-gw.m.163.com',
        'User-D': 'VBg/uXP4Z0TylKTvZb34IgiYzTUaoqdn3M6kHKMkDetsiq8efhvvgUDSUOxJnwEE',
        'User-U': read(newsCookie),
        'Accept': '*/*',
        'User-C': '5oiR',
        'X-NR-Trace-Id': '1607444835574_10795993360_05B74F33-701C-4787-9F5B-168734281495',
        'User-N': 'WMJEFhR9rRqgr30oX2W7DQ==',
        'Domain': 'v6-gw.m.163.com',
        'X-B3-SpanId': '0',
        'User-id': 'y76YOdDzNGi7eWubdcuxXFj2fisMkpT381eI5zJXRyyKQkBdUQzhbDKk39gE7Pm76p0Wjfrfa3tZPXEZTGDm5kx0IAprRVp+Jsn69qbj23yAzDRdr4mMRwGkxrjro/HcePBK0dNsyevylzp8V9OOiA==',
        'User-tk': 'xRFRFMVbj+0XbM2605q5PxjNMORTwTzFHDXv03MUCgMe+q/z6MDzXjA37FA+rNQA',
        'User-DA': '3L6U5IXvvnlZtkWO7Rgu0sAkSG0nV2/pudo5e5hcDdrIMPu0ldo8ooNFyTNsvBvE',
        'Accept-Language': 'zh-cn',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Length': '67',
        'User-Agent': 'NewsApp/74.1 iOS/14.2 (iPhone12,1)',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-B3-Sampled': '1'
    },
    body: 'targetId=FTAH8M7N0520LLJ4_246981833&targetType=comment&taskId=10002'
}

//点赞
const likeHeader = {
    method: 'POST',
    url: 'https://v6-gw.m.163.com/commons-user-incentive/api/v1/commons/incentive/doAction',
    headers: {
        'Host': 'v6-gw.m.163.com',
        'User-D': 'VBg/uXP4Z0TylKTvZb34IgiYzTUaoqdn3M6kHKMkDetsiq8efhvvgUDSUOxJnwEE',
        'User-U': read(newsCookie),
        'Accept': '*/*',
        'User-C': '5aS05p2h',
        'X-NR-Trace-Id': '1607444835574_10795993360_05B74F33-701C-4787-9F5B-168734281495',
        'User-N': 'WMJEFhR9rRqgr30oX2W7DQ==',
        'Domain': 'v6-gw.m.163.com',
        'X-B3-SpanId': '0',
        'User-id': 'y76YOdDzNGi7eWubdcuxXFj2fisMkpT381eI5zJXRyyKQkBdUQzhbDKk39gE7Pm76p0Wjfrfa3tZPXEZTGDm5kx0IAprRVp+Jsn69qbj23yAzDRdr4mMRwGkxrjro/HcePBK0dNsyevylzp8V9OOiA==',
        'User-tk': 'xRFRFMVbj+0XbM2605q5PxjNMORTwTzFHDXv03MUCgMe+q/z6MDzXjA37FA+rNQA',
        'User-DA': '3L6U5IXvvnlZtkWO7Rgu0sAkSG0nV2/pudo5e5hcDdrIMPu0ldo8ooNFyTNsvBvE',
        'Accept-Language': 'zh-cn',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Length': '67',
        'User-Agent': 'NewsApp/74.1 iOS/14.2 (iPhone12,1)',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-B3-Sampled': '1'
    },
    body: 'targetId=FTAJ5DAV0519AQ5J_246746324&targetType=comment&taskId=20006'
}

//分享
const shareHeader = {
    method: 'POST',
    url: "https://b-gw.m.163.com/commons-user-incentive/api/v1/commons/incentive/doAction",
    headers: {
        'Host': 'b-gw.m.163.com',
        'User-D': 'VBg/uXP4Z0TylKTvZb34IgiYzTUaoqdn3M6kHKMkDetsiq8efhvvgUDSUOxJnwEE',
        'User-U': read(newsCookie),
        'Accept': '*/*',
        'User-C': '5aS05p2h',
        'X-NR-Trace-Id': '1607412767663_10795821456_05B74F33-701C-4787-9F5B-168734281495_1',
        'User-N': 'WMJEFhR9rRqgr30oX2W7DQ==',
        'Domain': 'b-gw.m.163.com',
        'X-B3-SpanId': '0',
        'User-id': 'y76YOdDzNGi7eWubdcuxXFj2fisMkpT381eI5zJXRyyKQkBdUQzhbDKk39gE7Pm76p0Wjfrfa3tZPXEZTGDm5kx0IAprRVp+Jsn69qbj23yAzDRdr4mMRwGkxrjro/HcePBK0dNsyevylzp8V9OOiA==',
        'User-tk': 'xRFRFMVbj+0XbM2605q5PxjNMORTwTzFHDXv03MUCgMe+q/z6MDzXjA37FA+rNQA',
        'User-DA': '3L6U5IXvvnlZtkWO7Rgu0sAkSG0nV2/pudo5e5hcDdrIMPu0ldo8ooNFyTNsvBvE',
        'Accept-Language': 'zh-cn',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Length': '53',
        'User-Agent': 'NewsApp/74.1 iOS/14.2 (iPhone12,1)',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-B3-Sampled': '1'
    },
    body: 'targetId=FT67TA81000189FH&targetType=doc&taskId=10003'
}

async function sign() {
    await $task.fetch(signHeader).then(response => {
        console.log(response.body)
    })
}

async function reads() {
    await sign()
    for (let i = 0; i < 10; i++) {
        await $task.fetch(readHeader).then(response => {
            if(i == 9){
                console.log(response.body)
            }
            
        })
    }
}

async function posts() {
    await reads()
    for (let i = 0; i < 10; i++) {
        await $task.fetch(postHeader).then(response => {
            if(i == 9){
                console.log(response.body)
            }
            
        })
    }
}

async function like() {
    await posts()
    for (let i = 0; i < 10; i++) {
        await $task.fetch(likeHeader).then(response => {
            if(i == 9){
                console.log(response.body)
            }
            
        })
    }
}

async function video() {
    await like()
    for (let i = 0; i < 5; i++) {
        await $task.fetch(videoHeader).then(response => {
            if(i == 4){
                console.log(response.body)
            }
            
        })
    }
}

async function share() {
    await video()
    for (let i = 0; i < 10; i++) {
        await $task.fetch(shareHeader).then(response => {
            if(i == 9 && response.body.indexOf('分享完成') != -1){
                console.log(response.body)
                notify('网易新闻任务完成')
            }else if(i == 9 && response.body.indexOf('成功') != -1){
                console.log(response.body)
                notify('网易新闻任务重复完成')
            }else if(i == 9){
                console.log(response.body)
                notify('网易新闻任务失败，请查看日志')
            }
            
        })
    }
    
}
share()

function write(key, val) {
    return $prefs.setValueForKey(key, val)
}
function read(val) {
    return $prefs.valueForKey(val)
}
function notify(title, subtitle, text) {
    if (subtitle == undefined) {
        subtitle = ''
        text = ''
    } else if (text == undefined) {
        text = ''
    }
    $notify(title, subtitle, text)
    $done()
}
