// import { describe, expect, beforeEach, it, inject,
//          beforeEachProviders, fakeAsync} from '@angular/core/testing';
// import { ResponseOptions, Response, Http, BaseRequestOptions,
//          RequestMethod, HTTP_PROVIDERS } from '@angular/http';      
// import { provide, Injectable } from '@angular/core';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { Observable } from 'rxjs/Observable';
// import { MenuService } from './menu.service';

// describe('MockBackend: LanguagesServiceHttp', () => {
//   let mockbackend:MockBackend, service:MenuService;
//   let errorMessage: string;
//   let menus:any[];
//   //setup
//   beforeEachProviders(() => [
//     MenuService,
//     MockBackend,
//     MockBackend,
//     BaseRequestOptions,
//     provide(Http, {
//       useFactory: (backend:MockBackend, options:BaseRequestOptions) => new Http(backend, options), 
//       deps: [MockBackend, BaseRequestOptions]})
//   ]);
  
//   beforeEach(inject([MockBackend, MenuService], (_mockbackend:MockBackend, _service:MenuService) => {
//     mockbackend = _mockbackend;
//     service = _service;
//   }))
  
//   //specs
//   it('should return mocked response', function() {
//     let response = [
//                       {
//                         "link":"page/product_sub_page.html",
//                         "name":"Food & Drink"
//                       },
//                       {
//                         "link":"page/product_sub_page.html",
//                         "name":"Cloth"
//                       },
//                       {
//                         "link":"page/product_sub_page.html",
//                         "name":"Restaurant"
//                       },
//                       {
//                         "link":"page/product_sub_page.html",
//                         "name":"Delivery & Service"
//                       },
//                       {
//                         "link":"page/product_sub_page.html",
//                         "name":"Tour"
//                       }
//                     ];
//     mockbackend.connections.subscribe(function(connection:MockConnection) {
//       connection.mockRespond(new Response(new ResponseOptions({ body:response })));
//     });
//     service.getMainMenu().subscribe(
//       data => this.menus = data,
//       error => this.errorMessage = <any>error
//     );
//     // Request to webservice successful 
//     expect(menus[0].link).toBe("page/product_sub_page.html");
//     expect(menus[0].name).toBe("Food & Drink");
//     expect(menus.length).toBe(5);
    
//     //Request to webservice fail
//     expect(errorMessage).not.toBeNull();
//   });
// })

// /*
// // Test with http 
// describe('Service: UserService', () => {
//   let service:MenuService;
//   let menus: any[];
//   let errorMessage: string;
  
//   //setup
//   beforeEachProviders(() => [
//     HTTP_PROVIDERS, 
//     MenuService
//   ]);
  
//   beforeEach(inject([MenuService], function(s:MenuService) {
//     service = s;
//   }));
  
//   //specs
//   it('should return available users', function() {
//     service.getMainMenu().subscribe(
//       data => this.menu = data,
//       error => this.errorMessage = <any>error
//     );
//     // success with request
//     expect(menus[1].link).toBe("page/product_sub_page.html");
//     expect(menus[1].name).toBe("Cloth");
//     expect(menus.length).toBe(5);
//     // fail with request
//     expect(errorMessage).not.toBeNull();
//   });

// })*/



