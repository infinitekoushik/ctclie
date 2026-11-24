/* CTCLie analytics loader. One file controls analytics and consent defaults for the whole site.
   Google Tag Manager container: GTM-NZNQ7LQ6. Change this file, then bump the ?v= number in the script tag. */
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

/* Visitors in the EEA, the UK and Switzerland: analytics and ad storage are OFF by default. */
gtag('consent', 'default', {
  ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied',
  region: ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH'],
  wait_for_update: 500
});
/* Everyone else: analytics on, ad storage off (no ads on the site yet). */
gtag('consent', 'default', {
  ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted'
});

/* Standard Tag Manager start, then load the container. */
dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NZNQ7LQ6';
  document.head.appendChild(s);
})();
