if ($request.url.match(/\/setting\/logs/)) {
  const airportCookie = 'airportCookie'
  const nowcookie = $request.headers['Cookie']
  
    if ($prefs.valueForKey(airportCookie)){
      if($prefs.valueForKey(airportCookie) != nowcookie){
        $prefs.setValueForKey(nowcookie,airportCookie)
        console.log($prefs.valueForKey(airportCookie))
        $notify("", '', 'cookie更新成功')
        $done()
      }else{
        $notify("", '', 'cookie无需更新')
        $done()
      }
    }else{
      $prefs.setValueForKey(nowcookie,airportCookie)
      $notify("", '', 'cookie首次写入成功')
      $done()
    }
    $done()
}else {
  const myRequest = {
    url: 'https://12o.ooo/user/checkin',
    method: 'POST',
    headers: { Cookie: $prefs.valueForKey('airportCookie') }
  }
  $task.fetch(myRequest).then(response => {
    const body = response.body
    console.log(body)
  })
$done()
}


