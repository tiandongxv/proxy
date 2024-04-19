const url = `https://zxcsol.com/wp-admin/admin-ajax.php`;
const method = `POST`;
const headers = {
'X-Requested-With' : `XMLHttpRequest`,
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`,
'Sec-Fetch-Site' : `same-origin`,
'Origin' : `https://zxcsol.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' : `PHPSESSID=0rheuvhb792ln1fjcq1fppfbah; wordpress_logged_in_140e9c6ed7a3d790ec814fc185451937=tiandamon%7C1714346194%7CHKfReWhYfa4Rvsas0Ck2gupCr7PUJaJlIjK4W4wloGz%7Cc522b292ccc894ee2866e57eef58307f4b6469431f5472b1b221dbac985926f4; Hm_lvt_3e980bca7e480150ad692f50f1c25c97=1709425002,1709890341,1710523598;`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/javascript, */*; q=0.01`
};
const body = `action=user_checkin`;
const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: body // Optional.
};

$httpClient.post(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    var nt = JSON.parse(response.body).msg;
    $notify("知轩藏书txt(tiandamon)", "", nt); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("知轩藏书txt(tiandamon)", "", reason.error); // Error!
    $done();
});