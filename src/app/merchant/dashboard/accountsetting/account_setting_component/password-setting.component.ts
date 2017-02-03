import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; // , ControlGroup
import { Router } from '@angular/router'; 

import { UserService } from './../../../../service/user_service/user.service';
import { User } from './../../../../class/user/user'; 

@Component({ 
	selector: 'password-setting',
	templateUrl: 'password-setting.component.html',
	styles: ['.btn-red {background-color: red;}'],
	providers : [UserService]
})

export class PasswordSettingComponent { 
	private passwordForm: FormGroup;
	private auth_user: User;

	constructor(private fb: FormBuilder,private router: Router,private userService: UserService){
		// get information of current user
		let username: string =localStorage.getItem("username");
		
		this.passwordForm = this.fb.group({ 
	    	current_password: ["",Validators.compose([Validators.required,
	    				Validators.pattern('(?=.*[0-9])(?=.*[A-Za-z]).{6,40}') ])],
	    	new_password: ["",Validators.compose([Validators.required,
	    				  Validators.pattern('(?=.*[0-9])(?=.*[A-Za-z]).{6,40}') ])],
	    	retype_password: ["",Validators.compose([Validators.required,
	    				  Validators.pattern('(?=.*[0-9])(?=.*[A-Za-z]).{6,40}') ])]
   		});
		// get data user by username
		this.auth_user=this.userService.getUserByUsername(username);
	}

	changePassword(): void{
		var user=new User();
		user.setPassword= this.passwordForm.controls["current_password"].value;
		// current pwd and auth pwd match 
		if(user.getPassword == this.auth_user.getPassword){
			if(user.getPassword != this.passwordForm.controls["new_password"].value){
			// new pwd and retype new pwd match
				if(this.passwordForm.controls["new_password"].value == this.passwordForm.controls["retype_password"].value ){
					if(this.userService.updateUser(user)){ // update password
						swal("Success!", "Update Password successfully", "success");
					}else{ // fail with udpate password
						swal("Fail", "Fail with update password", "error");
						this.router.navigate(['/mer-acc-setting']);
					}
				}else { // new pwd and retype new pwd miss match
					swal("Fail", "New password and retype new password miss match.", "error");
					this.router.navigate(['/mer-acc-setting']);
				}		
			}else{
				// current password and new password are the same
				swal("Fail", "Current password and new password cannot be the same.", "error");
				this.router.navigate(['/mer-acc-setting']);
			}
		}else{ // current pwd and auth pwd miss match
			swal("Fail", "Your current password is not correct.", "error");
			this.router.navigate(['/mer-acc-setting']);
		}		
		event.preventDefault();
	}

	cancel(): void{
		this.router.navigate(['/merchant/dashboard']);
		event.preventDefault();
	}


}