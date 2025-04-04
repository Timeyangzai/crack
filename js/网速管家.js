/*
#!url=https://raw.githubusercontent.com/Timeyangzai/crack/refs/heads/main/modules/网速管家.module
#!name=网速管家
#!description=网速管家 订阅解锁

[Script]
网速管家=type=http-response,pattern=^https:\/\/api-v3\.speedtest\.cn\/user\/info,requires-body=1,script-path=https://raw.githubusercontent.com/Timeyangzai/crack/refs/heads/main/js/网速管家.js

[MITM]
hostname = %APPEND% api-v3.speedtest.cn
*/

var body = $response.body;
var myang_wsgj = JSON.parse(body);

myang_wsgj.data.integral = "999999999";
myang_wsgj.data.vipExpire = "2099-09-09 09:09:09";
myang_wsgj.data.isVip = 1;

body = JSON.stringify(chxm1023);
$done({ body: body }); 
