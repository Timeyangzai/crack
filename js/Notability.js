/*
#!url=https://raw.githubusercontent.com/Timeyangzai/crack/refs/heads/main/modules/Notability.module
#!name=Notability
#!description=Notability 订阅解锁

[Script]
notability = type=http-response,pattern=^https?:\/\/notability\.com\/(global|subscriptions),script-path=https://raw.githubusercontent.com/Timeyangzai/crack/refs/heads/main/js/Notability.js, requires-body=true,max-size=-1,timeout=60

[MITM]
hostname = %APPEND% notability.com

*/

var myang_notability = JSON.parse($response.body);

myang_notability = {
  data: {
    processAppleReceipt: {
      error: 0,
      subscription: {
        productId: "com.gingerlabs.Notability.premium_subscription",
        originalTransactionId: "570001184068302",
        tier: "premium",
        refundedDate: null,
        refundedReason: null,
        isInBillingRetryPeriod: false,
        expirationDate: "2099-09-09T09:09:09.000Z",
        gracePeriodExpiresAt: null,
        overDeviceLimit: false,
        expirationIntent: null,
        __typename: "AppStoreSubscription",
        user: null,
        status: "canceled",
        originalPurchaseDate: "2022-09-09T09:09:09.000Z",
      },
      __typename: "SubscriptionResult",
    },
  },
};

$done({ body: JSON.stringify(myang_notability) });
