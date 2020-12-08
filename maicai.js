
const urlKey = "urlKey"
const headerKey = "headerKey"
const bodyKey = "bodyKey"
get=(val => $prefs.valueForKey(val))

const myContent = {
    method: 'POST',
    url:get(urlKey),
    headers:JSON.parse(get(headerKey)),
    body:get(bodyKey)
}

$task.fetch(myContent).then(response => {
    const body = response.body
    console.log(body)
})
const myShare ={
    method:'GET',
    url:'https://mall.meituan.com/api/c/mallcoin/checkIn/getShareReward?app_tag=union&bizId=2&poi=311&poiId=311&shareBusinessType=2&stockPois=311&tenantId=1&userId=90444748&utm_medium=iphone&utm_term=5.12.0',
    headers:JSON.parse(get(headerKey))
}
$task.fetch(myShare).then(response => {
    const body = response.body
    console.log(body)
})

$done()
