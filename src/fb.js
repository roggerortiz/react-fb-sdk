export const initFacebookSdk = () => {
   return new Promise(resolve => {
      window.fbAsyncInit = () => {
         window.FB.init({
            appId: '813903793049394',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v15.0'
         })

         resolve();
      }

      (function (d, s, id) {
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) { return; }
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
   });
}