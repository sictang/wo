const urlKey = "urlKey"
const headerKey = "headerKey"
const bodyKey = "bodyKey"
const theUrlKey = $request.url
const theHeaderKey = JSON.stringify($request.headers)
const theBodyKey = $request.body

if(typeof $request != "undefined"){
    getCookie()
}else{
    checkin()
}


getCookie=()=> {
    if (get(headerKey)) {
        if (get(headerKey) != get(headerKey)) {
            set(theUrlKey, urlKey)
            set(theHeaderKey, headerKey)
            set(theBodyKey, bodyKey)
            $notify("", '', 'cookie更新成功')
            $done()
        } else {
            console.log('cookie无需更新')
            $done()
        }
    } else {
        set(theUrlKey, urlKey)
        set(theHeaderKey, headerKey)
        set(theBodyKey, bodyKey)
        $notify("", '', 'cookie首次写入成功')
        $done()
    }
}

checkin =()=> {
    const myContent = {
        method: 'POST',
        url: get(urlKey),
        headers: JSON.parse(get(headerKey)),
        body: get(bodyKey)
    }

    $task.fetch(myContent).then(response => {
        const body = response.body
        console.log(body)
    })
    $done()
}

set = (key, val) => {return $prefs.setValueForKey(key, val)}
get = (val => $prefs.valueForKey(val))
$done()
