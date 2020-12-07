const urlkey = "urlkey"
const headerKey = "headerKey"
const bodyKey = "bodyKey"
const theUrlKey = $request.url
const theHeaderKey = $request.headers
const thenBodyKey = $request.body
const set = $prefs.setValueForKey
const get = $prefs.valueForKey

if (get(headerKey)) {
    if(get(headerKey) != get(headerKey)){
        set(theUrlKey, urlkey)
        set(theHeaderKey, headerKey)
        set(thenBodyKey, bodyKey)
        $notify("", '', 'cookie更新成功')
        $done()
    }else{
        $notify("", '', 'cookie无需更新')
        $done()
    }
}else{
    set(theUrlKey, urlkey)
    set(theHeaderKey, headerKey)
    set(thenBodyKey, bodyKey)
    $notify("", '', 'cookie首次写入成功')
    $done()
}

$done()
