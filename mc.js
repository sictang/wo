const urlKey = "urlKey"
const headerKey = "headerKey"
const bodyKey = "bodyKey"
const theUrlKey = $request.url
const theHeaderKey = $request.headers
const theBodyKey = $request.body

if (get(headerKey)) {
    if(get(headerKey) != get(headerKey)){
        set(theUrlKey, urlKey)
        set(theHeaderKey, headerKey)
        set(theBodyKey, bodyKey)
        $notify("", '', 'cookie更新成功')
        $done()
    }else{
        $notify("", '', 'cookie无需更新')
        $done()
    }
}else{
    set(theUrlKey, urlKey)
    set(theHeaderKey, headerKey)
    set(theBodyKey, bodyKey)
    
    console.log(get(headerKey))
    
    $notify("", '', 'cookie首次写入成功')
    $done()
}

set=(key,val) =>{
    return $prefs.setValueForKey(key, val)
}
get=(val) =>{
    return $prefs.valueForKey(val)
}

$done()
