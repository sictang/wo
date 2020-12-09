const urlKey = "urlKey"
const headerKey = "headerKey"
const bodyKey = "bodyKey"
get = (val => $prefs.valueForKey(val))
const header = JSON.parse(get(headerKey))
let taskId, userTaskId, activityId, taskType, rewardId
const userId = 'userId=' + get(bodyKey).match(/\"userId\"\:\"([0-9]{6,10})\"\,/)[1] + '&'
const paraments = userId + get(urlKey).match(/userCheckInNew\?(.+)/)[1]

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
        url: get(urlKey),
        headers: header,
        body: get(bodyKey)
    }

    await $task.fetch(myContent).then(response => {
        const body = response.body
        console.log(body)
    })
}

//分享
async function share(){
    await checkin()
    const shareUrl = 'https://mall.meituan.com/api/c/mallcoin/checkIn/getShareReward?shareBusinessType=2&'+paraments
    const myshare = {
        method:'GET',
        url:shareUrl,
        headers:myshare
    }
    await $task.fetch(myshare).then(response=>{
        console.log(response.body)
    })
}



//获取任务ID
async function taskList() {
    await share()
    const queryTaskListInfoUrl = 'https://mall.meituan.com/api/c/mallcoin/checkIn/queryTaskListInfoV2?channel=1&' + paraments
    const queryTaskListInfo = {
        method: 'GET',
        url: queryTaskListInfoUrl,
        headers: getheader
    }
    await $task.fetch(queryTaskListInfo).then(response => {
        const body = response.body
        taskId = 'taskId=' + body.match(/\"id\"\:(..)\,\"userTaskId\"\:(........)\,\"activityId\"\:(..)\,/)[1] + '&'
        userTaskId = 'userTaskId=' + body.match(/\"id\"\:(..)\,\"userTaskId\"\:(........)\,\"activityId\"\:(..)\,/)[2] + '&'
        activityId = 'activityId=' + body.match(/\"id\"\:(..)\,\"userTaskId\"\:(........)\,\"activityId\"\:(..)\,/)[3] + '&'
        taskType = 'taskType=' + body.match(/\"taskType\"\:([0-9]{1,2})\,/)[1] + '&'
        rewardId = 'rewardId=' + body.match(/\"rewardId\"\:([0-9]{3,5})\,/)[1] + '&'
        return taskId, userTaskId, activityId, taskType, rewardId
    })

}
//领取任务
async function takeTask() {
    await taskList()
    const takeTaskUrl = 'https://mall.meituan.com/api/c/mallcoin/checkIn/takeTask?channel=1&deviceId=&' + taskId + activityId + paraments
    const mytakeTask = {
        method: 'GET',
        url: takeTaskUrl,
        headers: getheader
    }
    await $task.fetch(mytakeTask).then(response => {
        console.log(response.body)
    })
}
//完成任务
async function taskEventComplete() {
    await takeTask()
    const taskEventCompleteUrl = 'https://mall.meituan.com/api/c/mallcoin/checkIn/taskEventComplete?channel=1&eventType=6&' + paraments
    const mytaskEventComplete = {
        method: 'GET',
        url: taskEventCompleteUrl,
        headers: getheader
    }
    await $task.fetch(mytaskEventComplete).then(response => {
        console.log(response.body)
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
    $task.fetch(mytaketaskReward).then(response => {
        console.log(response.body)
    })
}

 takeTaskReward()
