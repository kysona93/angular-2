// import { describe, expect, beforeEach, it, inject,
//          beforeEachProviders, fakeAsync} from '@angular/core/testing';
// import { User } from './../class/user';
// import { Business } from './../class/merchant/business';
// import { Product } from './../class/merchant/product';

// export class MerchantRegisterService{
//     saveMerchantBusiness(bus:Business):boolean{

//         return true;
//     }
//     saveMerchantProduct(pro:Product):boolean{
//         return true;
//     }

// }

// describe('Service: AthenticationService', () => {
//   let service:MerchantRegisterService;
  
//   //setup
//   beforeEachProviders(() => [
//     MerchantRegisterService
//   ]);
  
//   beforeEach(inject([MerchantRegisterService], function(s:MerchantRegisterService) {
//     service = s;
//   }));

//   let user=new User();
//   user.setFirstname="merchant";
//   user.setLastname="merchant";
//   user.setEmail="merchant@gmail.com";
//   user.setPassword="s12345";
//   //specs
//   it('should return available user data', () => {
//       let bus=new Business();
//       let pro=new Product();
//       let verify1:boolean=service.saveMerchantBusiness(bus);
//       let verify2:boolean=service.saveMerchantProduct(pro);
//       expect(verify1).toBe(true);
//       expect(verify2).toBe(true);
//   });

// }) 