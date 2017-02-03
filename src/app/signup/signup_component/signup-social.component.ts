//import 'package:ng2_g_signin/ng2_g_signin.dart';
import { Component, OnInit } from '@angular/core';
import { FBConnector } from './FBConnector';
declare var FB : FBSDK;

@Component({
	selector: 'signup-social',
	templateUrl: 'signup-social.component.html'
}) 

export class SignUpSocialNetworkComponent implements OnInit{

	ngOnInit():void {
		var fbCon: FBConnector = new FBConnector('1155848564489066'); // FB App ID
    	fbCon.initFB(); // init FB form
      this.renderButton(); // init button sign up with googl+
	}
  // when user success login with gmail
  onSuccess(googleUser:any) {
           var profile=googleUser.getBasicProfile();
            console.log('Gmail name: ' + profile.getName()+
                        ' Gmail ID: ' + profile.getId()+
                        ' Gmail email: ' + profile.getEmail()+
                        ' Gmail imageUrl: ' + profile.getImageUrl()
                        ); 
  }
  // when user fail with login gmail
  onFailure(error:any) {
      console.log(error);
  }
  // to create button sign up with gmail
  renderButton() {
          gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 345,
            'height': 35,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': this.onSuccess,
            'onfailure': this.onFailure
          });
  }

  // when user sign up with facebook
	onSignUpFacebook():void{
		FB.login(("/me",function (response) {
                  let strobj:any;
                  let obj: any;
                  strobj=JSON.stringify(response);
                  // respose include authResponse,accessToken,userID,expiresIn,signedRequest,status
                  obj=JSON.parse(strobj);
          
                  if(obj.authResponse){
                    FB.api("/me?fields=id,first_name,last_name,gender,link,name,picture","GET",function(response){
                      let strobj=JSON.stringify(response);
                      let obj=JSON.parse(strobj);
                      //alert(obj.name); // get data from object json
                     console.log("Facebook Data: "+JSON.stringify(response));
                    });

                  }
              }),
        null);
	}


 }