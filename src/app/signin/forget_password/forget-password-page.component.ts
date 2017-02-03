import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../../service/user_service/user.service';
import { AuthenticationService } from './../../service/user_service/authentication.service';
import { User } from './../../class/user/user';

@Component({
    templateUrl: 'forget-password-page.component.html',
    styles: ['.btn-red {background-color: red;}'],
    providers : [UserService,AuthenticationService]
})

export class ForgetPasswordComponent {
    private forgetPasswordForm: FormGroup;
    private info_desc: string;

    constructor(private fb: FormBuilder,private router: Router,private userService: UserService,
				private auth: AuthenticationService){

        this.forgetPasswordForm= this.fb.group({
	    	email: ["", Validators.compose([Validators.required,
	    				Validators.pattern('^[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.[a-z]{2,}$)') ])]
   		 }); 

    }

    forgetPassword(): void{
        let user=new User();
        user.setPassword= this.forgetPasswordForm.controls["email"].value;

        if(this.userService.updateUser(user)){
            this.info_desc="Password reset instructions have been emailed to "+this.forgetPasswordForm.controls["email"].value+". This may take a minute. Be sure to check your spam folder and add verify@macrocoupon.com to your address book to ensure delivery. If you still haven’t received your activation email, enter your email below and we’ll send you another.";
	    }else{
			this.info_desc="Fail! Try again";
            this.forgetPasswordForm.controls["email"].setValue('');
            //this.forgetPasswordForm.controls["email"].updateValue('');
	   }
    }
    
 }