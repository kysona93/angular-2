// import { describe, expect, beforeEach, it, inject,
//          beforeEachProviders, fakeAsync} from '@angular/core/testing';
// import { User } from './../class/user';

// export class AthenticationService{
//     getAllUsers():any[]{
//         return [
//             {"id":1,"firstname":"user","lastname":"user","email":"user@gmail.com","password":"s12345"},
//             {"id":2,"firstname":"merchant","lastname":"merchant","email":"merchant@gmail.com","password":"s12345"},
//             {"id":3,"firstname":"admin","lastname":"admin","email":"admin@gmail.com","password":"s12345"}
//         ];
//     }

//     login(user:User):any{
//       let users =this.getAllUsers();
//         for(let u of users){
//             if(u.email == user.getEmail && u.password == user.getPassword){
//             return u;
//             }
//         }
//         // if user not found
//       return null;
//      }    
// }

// describe('Service: AthenticationService', () => {
//   let service:AthenticationService;
  
//   //setup
//   beforeEachProviders(() => [
//     AthenticationService
//   ]);
  
//   beforeEach(inject([AthenticationService], function(s:AthenticationService) {
//     service = s;
//   }));

//   let user=new User();
//   user.setFirstname="merchant";
//   user.setLastname="merchant";
//   user.setEmail="merchant@gmail.com";
//   user.setPassword="s12345";
//   //specs
//   it('should return available user data', () => {
//     let auth_user:any=service.login(user);
//     // login success
//     expect(auth_user.lastname).toBe('merchant');
//     expect(auth_user.password).toBe('s12345');
//     // login fail
//     //expect(auth_user).toBeNull();
//   });

// }) 