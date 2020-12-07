const urlKey = "urlKey"
const headerKey = "headerKey"
const bodyKey = "bodyKey"


get=(val) =>{
    return $prefs.valueForKey(val)
}

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
$done()
