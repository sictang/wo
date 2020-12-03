// if ($request.headers) {
//   const airportCookie = 'airportCookie'
//   const header = $request.headers
//   const regtx = /key=.+?;/
 
//   if (header['Cookie'] != undefined) {

//     if ($prefs.valueForKey(airportCookie) {
//       const cookies = header['cookie'].match(/email=.+?\;|ip=.+?\;|key=.+?\;|uid=.+?\;/g)
//       const cookie = cookies[0]+cookies[1]+cookies[2]+cookies[3]
//       $prefs.setValueForKey(cookie, airportCookie)

      
//       $notify("", '', 'cookie更新成功')
//     }else{
//       $notify("", '', 'cookie无需要更新')
//       console.log($prefs.valueForKey(airportCookie))
//       $done()
//          }
//   }
//   $done()

// }
try{
 console.log($prefs.valueForKey(airportCookie))
 $done()
}
catch(err){
 console.log(err)
 $done()
