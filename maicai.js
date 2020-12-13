const urlKey = "urlKey"
const headerKey = "headerKey"
const bodyKey = "bodyKey"
const taskId = 'taskId=52&'
const activityId = 'activityId=33&'
const taskType = 'taskType=6&'
const rewardId = 'rewardId=774&'
let userTaskId,checkinReward,shareReward,taskReward
const userId = 'userId=' + read(bodyKey).match(/\"userId\"\:\"([0-9]{6,10})\"\,/)[1] + '&'
const paraments = userId + read(urlKey).match(/userCheckInNew\?(.+)/)[1]
const header = JSON.parse(read(headerKey))
const getheader = {
    Host: header['Host'],
    t: header['t'],
    Cookie: header['Cookie'],
    Connection: header['Connection'],
    Accept: header['Accept'],
    'User-Agent': header['User-Agent'],
    'Accept-language': header['Accept-language'],
    Referer: header['Referer'],
    'Accept-Encoding': header['Accept-Encoding']
}

//签到
async function checkin() {
    const myContent = {
        method: 'POST',
        url: read(urlKey),
        headers: header,
        body: read(bodyKey)
    }
    await $task.fetch(myContent).then(response => {
        const body = JSON.parse(response.body)
        const result = body.data.result
        checkinReward = body.data.rewardValue
        if(body.indexOf('请重新登录') != -1){
            console.log(body)
            notify('cookie可能已经失效，请查看日志')
        }else{
            if (result) {
                console.log('签到获得:' + checkinReward + '元')
                return checkinReward
            } else {
                console.log('今天已经签到了')
                return checkinReward = 0
            }
        }

    })
}

//分享
async function share() {
    await checkin()
    const shareUrl = 'https://mall.meituan.com/api/c/mallcoin/checkIn/getShareReward?shareBusinessType=2&' + paraments
    const myshare = {
        method: 'GET',
        url: shareUrl,
        headers: getheader
    }
    await $task.fetch(myshare).then(response => {
        const body = JSON.parse(response.body)        
        const result = body.data.result
        shareReward = body.data.rewardValue
        if (result) {          
            console.log('签到获得:' + shareReward + '元')
            return shareReward
        } else {
            console.log('今天已经分享了')
            return shareReward = 0
        }
    })
}


//领取任务
async function takeTask() {
    await share()
    const takeTaskUrl = 'https://mall.meituan.com/api/c/mallcoin/checkIn/takeTask?channel=1&deviceId=&' + taskId + activityId + paraments
    const mytakeTask = {
        method: 'GET',
        url: takeTaskUrl,
        headers: getheader
    }
    await $task.fetch(mytakeTask).then(response => {
        const body = JSON.parse(response.body)
        if (body.code == 0) {
            console.log('领取任务成功')
        } else {
            console.log('领取任务失败')
        }
    })
}

//获取任务ID
async function taskList() {
    await takeTask()
    const queryTaskListInfoUrl = 'https://mall.meituan.com/api/c/mallcoin/checkIn/queryTaskListInfoV2?channel=1&' + paraments
    const queryTaskListInfo = {
        method: 'GET',
        url: queryTaskListInfoUrl,
        headers: getheader
    }
    await $task.fetch(queryTaskListInfo).then(response => {
        const body = response.body
        userTaskId = 'userTaskId=' + body.match(/\"id\"\:(..)\,\"userTaskId\"\:(........)\,\"activityId\"\:(..)\,/)[2] + '&'
        return userTaskId
    })
}

//完成任务
async function taskEventComplete() {
    await taskList()
    const taskEventCompleteUrl = 'https://mall.meituan.com/api/c/mallcoin/checkIn/taskEventComplete?channel=1&eventType=6&' + paraments
    const mytaskEventComplete = {
        method: 'GET',
        url: taskEventCompleteUrl,
        headers: getheader
    }
    await $task.fetch(mytaskEventComplete).then(response => {

    })
}
//领取奖励
async function takeTaskReward() {
    await taskEventComplete()
    const takeTaskRewardUrl = 'https://mall.meituan.com/api/c/mallcoin/checkIn/takeTaskReward?channel=1&' + activityId + taskId + userTaskId + taskType + rewardId + paraments
    const mytaketaskReward = {
        method: 'GET',
        url: takeTaskRewardUrl,
        headers: getheader
    }
    await $task.fetch(mytaketaskReward).then(response => {
        const body = JSON.parse(response.body)
        taskReward = body.data.rewardValue
        if (taskReward) {
            console.log('任务获得:' + taskReward + '元')
            return taskReward
        } else {
            console.log('你今天的任务已经完成了')
            return taskReward = 0
        }
    })
}

async function statisticsReward(){
    await takeTaskReward()
    const statistics = checkinReward + shareReward + taskReward
    console.log('今天获得'+statistics+'元')
    if(statistics != 0){
    notify('美团买菜','今天总共获得'+statistics+'元')
    }
}
statisticsReward()

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
