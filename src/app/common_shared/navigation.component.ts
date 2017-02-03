import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// service 
import { AuthenticationService } from './../service/user_service/authentication.service'; 
import { UserService } from './../service/user_service/user.service';

@Component({
    selector: 'navigation-web',  
    templateUrl: 'navigation.component.html',
    providers: [AuthenticationService,UserService]
})

export class NavigationComponent implements OnInit{  
    public username:any =null;
  public usertype:any =null;
    
  constructor(private auth:AuthenticationService,private userService: UserService, private router: Router){ }

  ngOnInit(): void{    
    //this.isUser=localStorage.getItem("auth_user");
    this.username=localStorage.getItem("username");
    this.usertype=localStorage.getItem("usertype");
    // start redirect page by usertype but now I use username for temporary
    /* if(this.usertype == "user") this.router.navigate(['Home']);
    else if(this.usertype == "merchant") this.router.navigate(['Merchant']);
    else if(this.usertype == "admin") this.router.navigate(['Admin']); */
  }
 
  // when user logout
  logOut(): void{
    this.auth.logout(); 
    //this.isUser=localStorage.getItem("auth_user");
    this.username=localStorage.getItem("username");
    this.usertype=localStorage.getItem("usertype");
    event.preventDefault();   
  }
}
