import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from './../../../service/user_service/authentication.service';
import { UserService } from './../../../service/user_service/user.service';
import { User } from './../../../class/user/user';

@Component({
    templateUrl: 'merchant-signin.component.html',
    providers: [AuthenticationService, UserService],
    styles: ['.btn-red {background-color: red;}']
})

export class MerchantSignInComponent { 
    private merSignInForm:any;

    constructor(private fb:FormBuilder,private router:Router,private auth:AuthenticationService){
        this.merSignInForm=fb.group({
            email: ["", Validators.compose([Validators.required,
	    				Validators.pattern('^[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.[a-z]{2,}$)') ])],
	    	password: ["",Validators.compose([Validators.required,
	    				  Validators.pattern('(?=.*[0-9])(?=.*[A-Za-z]).{6,40}') ])]
        });
    }

    doSignIn():void{
        let user=new User();
        let auth_user = new User();

        user.setEmail=this.merSignInForm.controls.email.value;
        user.setPassword=this.merSignInForm.controls.password.value;

        auth_user = this.auth.login(user);
        if(auth_user != null){
            // success login
            localStorage.removeItem("username");
            localStorage.removeItem("usertype");
            localStorage.setItem("username", auth_user.getLastname);
            localStorage.setItem("usertype", auth_user.getUserType);
            window.location.href="index.html";
        }else{
            // fail login
            swal("Login Fail!", "Check your email and password again.", "error");
			localStorage.removeItem("username");
			localStorage.removeItem("usertype");
			this.router.navigate(['merchant-signin']);
        }
        event.preventDefault();
    }

} 