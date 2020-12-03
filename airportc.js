if ($request.headers) {
  const airportCookie = 'airportCookie'
  const nowcookie = $request.headers['cookie']
  
    if ($prefs.valueForKey(airportCookie)){
      if($prefs.valueForKey(airportCookie) != nowcookie){
        $prefs.setValueForKey(nowcookie,airportCookie)
        console.log($prefs.valueForKey(airportCookie))
        $notify("", '', 'cookie更新成功')
        $done()
      }else{
        $notify("", '', 'cookie无需成功')
        $done()
      }
    }else{
      $prefs.setValueForKey(nowcookie,airportCookie)
      console.log($prefs.valueForKey(airportCookie))
      $notify("", '', 'cookie首次写入成功')
      $done()
    }
    $done()
}

$done()

