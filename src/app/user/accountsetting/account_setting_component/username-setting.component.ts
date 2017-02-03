import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; //, ControlGroup
import { Router } from '@angular/router'; 

import { UserService } from './../../../service/user_service/user.service';
import { User } from './../../../class/user/user';


@Component({
	selector: 'username-setting',
	templateUrl: 'username-setting.component.html',
	styles: ['.btn-red {background-color: red;}'],
	providers : [UserService]
}) 
 
export class UsernameSettingComponent { 
	private usernameForm: FormGroup;
	private auth_user: User;

	constructor(private fb: FormBuilder,private router: Router,private userService: UserService){
		// get information of current user
		let username: string = localStorage.getItem("username");

		this.usernameForm = this.fb.group({
	    	firstname: ["",Validators.compose([Validators.required,Validators.pattern('[A-Za-z\\s]{2,20}') ])],
			lastname: ["",Validators.compose([Validators.required,Validators.pattern('[A-Za-z\\s]{2,20}') ])],
	    	confirm_password: ["",Validators.compose([Validators.required,
	      						  Validators.pattern('(?=.*[0-9])(?=.*[A-Za-z]).{6,40}') ])]
   		});
	     // extract user information into form control 
		 this.auth_user= this.userService.getUserByUsername(username);
		 this.usernameForm.controls["firstname"].setValue(this.auth_user.getFirstname);
		 this.usernameForm.controls["lastname"].setValue(this.auth_user.getLastname);
	}

	changeUsername(): void{
		var user=new User();
		user.setFirstname= this.usernameForm.controls["firstname"].value;
		user.setLastname= this.usernameForm.controls["lastname"].value;
		user.setPassword= this.usernameForm.controls["confirm_password"].value;

		if(user.getPassword == this.auth_user.getPassword){ // confirm password match
			if(this.userService.updateUser(user)){ // update user
				swal("Success!", "Update Username successfully", "success");
			}else{
				swal("Fail", "Fail with update username", "error");
				this.router.navigate(['/user/account-setting']);
			}
		}else{ // comfirm password miss match
			swal("Fail", "Confirm password is not correct.", "error");
			this.router.navigate(['/user/account-setting']);
		}		
		event.preventDefault();
	}

	cancel(): void{
		this.router.navigate(['/home']);
		event.preventDefault();
	}


}