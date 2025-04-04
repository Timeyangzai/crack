/*
APE VIP 解锁 - QuantumultX 版本
功能：拦截 APE 用户信息接口，修改 VIP 状态

***************************
QuantumultX:

[rewrite_local]
^https:\/\/api\.ptexj\.com\/api\/v1\/users\/authed\/userinfo\?acc_type=wechat&api_type=.* url script-response-body VipQuantumultX.js

[mitm]
hostname = api.ptexj.com

***************************
Surge4 or Loon:

[Script]
http-response ^https:\/\/api\.ptexj\.com\/api\/v1\/users\/authed\/userinfo\?acc_type=wechat&api_type=.* requires-body=1,max-size=0,script-path=VipQuantumultX.js

[MITM]
hostname = api.ptexj.com

**************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

if (obj.data && obj.data.vip_info) {
  // 修改 VIP 状态
  obj.data.vip_info.is_vip = true;
  obj.data.vip_info.status = "active";
  
  // 如果 remaining_days 为 null，设置一个较大的值
  if (obj.data.vip_info.remaining_days === null) {
    obj.data.vip_info.remaining_days = 365;
  }
  
  // 发送成功通知
  $notify("APE VIP 解锁", "成功", "VIP 状态已修改为激活");
  
  body = JSON.stringify(obj);
}

$done({body}); 