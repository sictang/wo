const newsHeader = 'newsHeader'
const theHeader = JSON.stringify($request.headers)

if(read(newsHeader)){
    if(!read(newsHeader)){
        write(theHeader,newsHeader)
        console.log('cookie更新成功')
        notify('cookie更新成功')
    }else{
        console.log('cookie无需更新')
        $done()
    }

}else{
    write(theHeader,newsHeader)
    console.log('首次写入cookie成功')
    notify('首次写入cookie成功')
}

function write(key,val){
    return $prefs.setValueForKey(key,val)
}
function read(val){
    return $prefs.valueForKey(val)
}
function notify(title,subtitle,text){
    if(subtitle == undefined){
        subtitle =''
        text = ''
    }else if(text == undefined){
        text = ''
    }
     $notify(title,subtitle,text)
    $done()
}
