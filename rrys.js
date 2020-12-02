const url = "https://666999.16882021.xyz/plugin.php?id=k_misign:sign&operation=qiandao&formhash=339dcedf&format=empty&inajax=1&ajaxtarget=JD_sign";
const method = "GET";
const headers = {};
const data = {};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    //body: JSON.stringify(data)  Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    const body = JSON.parse(response.body)
    console.log(body);
    $notify('', body ,'' ,); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
