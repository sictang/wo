const GINFO = response.headers["cookie"][2]
const GKEY = response.headers["cookie"][3]
console.log(GINFO);
console.log(GKEY);
$notify("", GINFO, GKEY); // Success!
$done();
