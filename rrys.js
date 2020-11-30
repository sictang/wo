const url = "http://www.rrys2020.com/user/login/getCurUserTopInfo";
const method = "POST";
const headers = {Cookie:'GINFO=uid%3D10395821%26nickname%3Dsiaanga%26group_id%3D1%26avatar_t%3Dhttp%3A%2F%2Fimage.jstucdn.com%2Fftp%2Favatar%2Ff_noavatar_t.gif%26main_group_id%3D0%26common_group_id%3D52; GKEY=b283b63e753f6d2dbf3f5a32680d4f87'};
const data = {"info": "abc"};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    //body: JSON.stringify(data)  Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    const body = response.body
    const nickname = body.data.userinfo.nickname
    const cont_login = body.data.usercount.cont_login
    console.log(nickname);
    console.log(cont_login);
    $notify("Title", "Subtitle", nickname); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
