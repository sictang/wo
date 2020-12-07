const urlKey = "urlKey"
const headerKey = "headerKey"
const bodyKey = "bodyKey"
const theUrlKey = $request.url
const theHeaderKey = JSON.stringify($request.headers)
const theBodyKey = $request.body


set=(key,val) =>{ return $prefs.setValueForKey(key, val)}
get=(val=> $prefs.valueForKey(val))

if (get(headerKey)) {
    if(get(headerKey) != get(headerKey)){
        set(theUrlKey, urlKey)
        set(theHeaderKey, headerKey)
        set(theBodyKey, bodyKey)
        $notify("", '', 'cookie更新成功')
        $done()
    }else{
        console.log('cookie无需更新')
        $done()
    }
}else{
    set(theUrlKey, urlKey)
    set(theHeaderKey, headerKey)
    set(theBodyKey, bodyKey)   
    $notify("", '', 'cookie首次写入成功')
    $done()
}

$done()
