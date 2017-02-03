import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { User } from './../../class/user/user';
import { IUser } from './../../interface/iuser';
 
var users = [new User(), new User(), new User() ];
  
@Injectable() 
export class AuthenticationService {
  private users: User[];
  private errorMessage: string; 

  constructor(private router: Router,private userService: UserService){ }
 
  logout() : void{   
    //localStorage.removeItem("auth_user");
    localStorage.removeItem("username");
    localStorage.removeItem("usertype");
    // remove basket id of user
    localStorage.removeItem("basket_id");
    this.router.navigate(['signin']);
  }
 
  login(user: User): User{  
      users[0].setId=1;  
      users[0].setEmail="user@gmail.com";
      users[0].setFirstname="Seng";
      users[0].setLastname="Oudam";
      users[0].setPassword="s12345"; 
      users[0].setUserType="user";
      users[1].setId=2;
      users[1].setEmail="merchant@gmail.com";
      users[1].setFirstname="Ky";
      users[1].setLastname="Sona";
      users[1].setPassword="s12345";
      users[1].setUserType="merchant";
      users[2].setId=3;
      users[2].setEmail="admin@gmail.com";
      users[2].setFirstname="Seong";
      users[2].setLastname="Kanel";
      users[2].setPassword="s12345";
      users[2].setUserType="admin";

      for(let u of users){
        if(u.getEmail == user.getEmail && u.getPassword == user.getPassword){
          return u;
        }
      }
      return null;
      
       // let auth_user = new User();
       //   this.userService.getUser(user)
       //          			   .subscribe(
       //                        data => this.users = data,
       //                        error => this.errorMessage = <any>error,
       //                        () => console.log('Random Quote Complete')
       //          		    );

       //  let objs=JSON.stringify(this.users);
        
       //  if(objs != null){
       //    let obj=JSON.parse(objs);
       //    for(let i=0;i<obj.length;i++){
       //      if(obj[i].email == user.getEmail && obj[i].password == user.getPassword ) { 
       //        auth_user.setLastname=obj[i].lastname;
       //        return auth_user;
       //      }
       //    }
       //  }else{ 
       //    console.log("empty data");
       //  }
       //  return null;
  } // close function login
 

 
} // close class 