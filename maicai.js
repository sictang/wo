const urlKey = "urlKey"
const headerKey = "headerKey"
const bodyKey = "bodyKey"
const header = JSON.parse(get(headerKey))
const taskId = 'taskId=52&'
const activityId = 'activityId=33&'
const taskType = 'taskType=6&'
const rewardId ='rewardId=774&'
let userTaskId
const userId = 'userId=' + get(bodyKey).match(/\"userId\"\:\"([0-9]{6,10})\"\,/)[1] + '&'
const paraments = userId + get(urlKey).match(/userCheckInNew\?(.+)/)[1]

get = (val => $prefs.valueForKey(val))

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
        headers:getheader
    }
    await $task.fetch(myshare).then(response=>{
        console.log(response.body)
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
        console.log(response.body)
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
        console.log(userTaskId)
        return  userTaskId
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

