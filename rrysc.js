if($response.headers){
  const GINFO = $response.headers["cookie"][2]
  const GKEY = $response.headers["cookie"][3]
  const regtx1 = /GINFO=.+;/
  const regtx2 = /GKEY=.+;/
  GINFO = regtx1.exec(GINFO)[0]
  GKEY = regtx2.exec(GKEY)[0]
  console.log(GINFO);
  console.log(GKEY);
  $notify("", GINFO, GKEY); // Success!
}
$done();
