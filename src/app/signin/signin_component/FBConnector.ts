export class FBConnector {

  constructor(appID:string) {
    if (!window.fbAsyncInit) {
      console.log('define');
      window.fbAsyncInit = function() {
        FB.init({
          appId: appID,
          xfbml: true,
          version: 'v2.7'
        });
      };
    }
  }

  initFB() {
      let js:any,
      id = 'facebook-jssdk',
      ref = document.getElementsByTagName('script')[0];

    if (document.getElementById(id)) {
      return;
    }

    js = document.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/sdk.js";

    ref.parentNode.insertBefore(js, ref);
  }

}