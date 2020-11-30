const url = "http://www.rrys2020.com/user/login/getCurUserTopInfo";
const method = "POST";
const headers = {};
const data = {"info": "abc"};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    //body: JSON.stringify(data)  Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    const body = JSON.parse(response.body)
    const nickname = body.data.userinfo.nickname
    const cont_login = body.data.usercount.cont_login
    console.log(nickname);
    console.log(cont_login);
    $notify("Title", , nickname,"签到天数:"+cont_login); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
