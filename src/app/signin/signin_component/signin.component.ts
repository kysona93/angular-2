import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; 

// service 
import { UserService } from './../../service/user_service/user.service';
import { AuthenticationService } from './../../service/user_service/authentication.service';
// classes 
import { User } from './../../class/user/user'; 
import { Basket } from './../../class/product/basket'; 

@Component({ 
	selector: 'signin', 
	templateUrl: 'signin.component.html',
	styles: ['.btn-red {background-color: red;}'],
	providers : [UserService,AuthenticationService] 
}) 

export class SigninComponent {  
	private signinForm: FormGroup;
	private shown:boolean= true;

	constructor(private fb: FormBuilder,private router: Router,private userService: UserService,
				private auth: AuthenticationService){  
		this.signinForm = this.fb.group({
	    	email: ["", Validators.compose([Validators.required,
	    				Validators.pattern('^[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.[a-z]{2,}$)') ])],
	    	password: ["",Validators.compose([Validators.required,
	    				  Validators.pattern('(?=.*[0-9])(?=.*[A-Za-z]).{6,40}') ])]
   		 }); 	
	}
	
	signIn(): void{
		let user=new User();
		let auth_user = new User(); 
		let basket=new Basket();
		
		user.setEmail= this.signinForm.controls["email"].value;
		user.setPassword= this.signinForm.controls["password"].value;

		auth_user = this.auth.login(user);
		
		if(auth_user != null){ 
			// success with login 
			if(auth_user.getUserType == "user"){
				localStorage.setItem("username", auth_user.getLastname);
				localStorage.setItem("usertype", auth_user.getUserType);
				// assign user id, basket id to user
				basket.setId="B002"; 
				basket.setUserId=auth_user.getId;
				basket.setProQty=0;
				this.createBasketID(basket);

				window.location.href="index.html";
				//this.router.navigate(['Home']);
			}else if(auth_user.getUserType == "merchant"){
				localStorage.setItem("username", auth_user.getLastname);
				localStorage.setItem("usertype", auth_user.getUserType);
				this.router.navigate(['/merchant/dashboard']);
				//window.location.href="index.html";
			}else if(auth_user.getUserType == "admin"){
				localStorage.setItem("username", auth_user.getLastname);
				localStorage.setItem("usertype", auth_user.getUserType);
				this.router.navigate(['/admin']);
				//window.location.href="index.html";
			}
		}else{
			// fail with login 
			swal("Login Fail!", "Check your email and password again.", "error");
			localStorage.removeItem("auth_user");
			this.router.navigate(['/signin']);
		}
		event.preventDefault();
	} // close sign in function 

	createBasketID(basket:Basket):void{
		let obj_bk=JSON.parse(localStorage.getItem("basket_id"));
		if(obj_bk == null ){
			localStorage.setItem("basket_id",JSON.stringify(basket));
		}
	}


}// close class
