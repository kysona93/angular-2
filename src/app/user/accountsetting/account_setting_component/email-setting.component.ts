import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; // ControlGroup
import { Router } from '@angular/router'; 

import { UserService } from './../../../service/user_service/user.service';
import { User } from './../../../class/user/user';

@Component({
	selector: 'email-setting',
	templateUrl: 'email-setting.component.html',
	styles: ['.btn-red {background-color: red;}'],
	providers : [UserService]
})
 
export class EmailSettingComponent { 
	private emailForm: FormGroup;
	private auth_user: User;

	constructor(private fb: FormBuilder, private router: Router, private userService: UserService){
		// get information of current user
		let username: string =localStorage.getItem("username");

		this.emailForm = this.fb.group({
	    	new_email: ["",Validators.compose([Validators.required,
	    				   Validators.pattern('^[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.[a-z]{2,}$)') ])],
	    	confirm_password: ["",Validators.compose([Validators.required,
	    				  		  Validators.pattern('(?=.*[0-9])(?=.*[A-Za-z]).{6,40}') ])]
   		});
		// extract data into form 
		this.auth_user=this.userService.getUserByUsername(username);
		this.emailForm.controls["new_email"].setValue(this.auth_user.getEmail);
	}

	changeEmail(): void{
		var user=new User();
		user.setEmail= this.emailForm.controls["new_email"].value;
		user.setPassword= this.emailForm.controls["confirm_password"].value;

		if(user.getPassword == this.auth_user.getPassword){
			if(user.getEmail != this.auth_user.getEmail ){
				if(this.userService.updateUser(user)){
					swal("Success!", "Update Email successfully", "success");
				}else{
					swal("Fail", "Fail with update Email", "error");
					this.router.navigate(['/user/account-setting']);
				}
			}else{
				swal("Fail", "Your current email and your new email cannot be the same.", "error");
				this.router.navigate(['/user/account-setting']);
			}
		}else{
			swal("Fail", "Your current password is not correct.", "error");
			this.router.navigate(['/user/account-setting']);
		}
		event.preventDefault();
	}

	cancel(): void{
		this.router.navigate(['/home']);
		event.preventDefault();
	}


}