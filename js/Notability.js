/*
#!url=https://raw.githubusercontent.com/Timeyangzai/crack/refs/heads/main/modules/Notability.module
#!name=Notability
#!description=Notability 订阅解锁

[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/Timeyangzai/crack/refs/heads/main/js/Notability.js

[mitm]
hostname = notability.com
*/

var myang_notability = JSON.parse($response.body);
myang_notability = {
  data: {
    processAppleReceipt: {
      __typename: "SubscriptionResult",
      error: 0,
      subscription: {
        __typename: "AppStoreSubscription",
        status: "canceled",
        originalPurchaseDate: "2024-12-06T18:01:39.000Z",
        originalTransactionId: "180002386574666",
        expirationDate: "2099-09-09T09:09:09.000Z",
        productId: "com.gingerlabs.Notability.premium_subscription",
        tier: "premium",
        refundedDate: null,
        refundedReason: null,
        isInBillingRetryPeriod: false,
        gracePeriodExpiresAt: null,
        expirationIntent: "CUSTOMER_CANCELLED",
        overDeviceLimit: false,
        user: null,
      },
      isClassic: false,
    },
  },
};
$done({ body: JSON.stringify(myang_notability) });
