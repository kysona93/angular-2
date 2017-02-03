import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; 

import { UserService } from './../../service/user_service/user.service';
import { User } from './../../class/user/user';

@Component({
	selector: 'signup',
	templateUrl: 'signup.component.html',
	styles: ['.btn-red {background-color: red;}'],
	providers : [UserService]
})
 
export class SignUpComponent {
	private signupForm: FormGroup; 
	private agreement: boolean = false;
	private agreement_info: string="Please check this box if you want to proceed.";

	constructor(private fb: FormBuilder,private router: Router,private userService: UserService){ 
		this.signupForm = this.fb.group({
			firstname: ["",Validators.compose([Validators.required,Validators.pattern('[A-Za-z\\s]{2,40}') ])],
			lastname: ["",Validators.compose([Validators.required,Validators.pattern('[A-Za-z\\s]{2,40}') ])],
	    	email: ["",Validators.compose([Validators.required,
	    				Validators.pattern('^[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.[a-z]{2,}$)') ])],
	    	password: ["",Validators.compose([Validators.required,
	    				  Validators.pattern('(?=.*[0-9])(?=.*[A-Za-z]).{6,40}') ])],
	      	confirm_password: ["",Validators.compose([Validators.required,
	      							Validators.pattern('(?=.*[0-9])(?=.*[A-Za-z]).{6,40}') ])]
   		}); 

	} 
	checkKeepMe(): void{
		//alert("Keep me sign in");
	}

	checkAgreement(): void{
		if(this.agreement){
			//not agree
			this.agreement = false;
			this.agreement_info="Please check this box if you want to proceed.";
		}else{
			//agree
			this.agreement = true;
			this.agreement_info="";
		}
	}

	signUp(): void{
		var user=new User();
		user.setFirstname= this.signupForm.controls["firstname"].value;
		user.setLastname= this.signupForm.controls["lastname"].value;
		user.setEmail= this.signupForm.controls["email"].value;
		user.setPassword= this.signupForm.controls["password"].value;

		if(user.getPassword == this.signupForm.controls["confirm_password"].value ) {
			// check agreement 
			if(this.agreement){
				if(this.userService.saveUser(user)){
					//swal("Success!", "Do not forget go to check your email to verify your account.", "success");
					this.router.navigate(['/signup/verify-account']);
				}else{
					swal("Fail!", "Fail with sing up account", "error");
					this.router.navigate(['/signup']);
				} 
			}else{
				swal("","Check agreement checkbox if you want to proceed.","info");
			}
			
		}
		else {
			swal("Fail", "Password does not match!", "error");
			this.router.navigate(['/signup']);
		}
	} 


}