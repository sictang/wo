const urlkey = "urlkey"
const heanderKey = "heanderKey"
const bodyKey = "bodyKey"
const theUrlKey = $request.url
const theHeanderKey = $request.heanders
const thenBodyKey = $request.body
const set = $prefs.setValueForKey
const get = $prefs.valueForKey

if (get(heanderKey)) {
    if(get(heanderKey) != get(heanderKey)){
        set(theUrlKey, urlkey)
        set(theHeanderKey, heanderKey)
        set(thenBodyKey, bodyKey)
        $notify("", '', 'cookie更新成功')
        $done()
    }else{
        $notify("", '', 'cookie无需更新')
        $done()
    }
}else{
    set(theUrlKey, urlkey)
    set(theHeanderKey, heanderKey)
    set(thenBodyKey, bodyKey)
    $notify("", '', 'cookie首次写入成功')
    $done()
}

$done()
