if ($request.headers) {
  const airportKey = 'airportKey'
  const airportIp = 'airportIp'
  const header = $request.headers
  const regtx1 = /key=.+?;/
  const regtx2 = /ip=.+?;/
  if (regtx1.exec(header['Cookie']) != undefined) {

    if ($prefs.valueForKey(airportKey) != regtx1.exec(header['Cookie'])[0]) {
      const key = regtx1.exec(header['Cookie'])[0]
      const ip = regtx2.exec(header['Cookie'])[0]

      $prefs.setValueForKey(key, airportKey)
      $prefs.setValueForKey(ip, airportIp)
      console.log($prefs.valueForKey(key,ip))
      $notify("", '', 'cookie更新成功')
    } $notify("", '', 'cookie无需要更新')

    $done()
  }
  $done()
  //重写后加done()网页才会继续打开
}
