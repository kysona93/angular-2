// import { describe, expect, beforeEach, it, inject,
//          beforeEachProviders, fakeAsync} from '@angular/core/testing';
// import { ResponseOptions, Response, Http, BaseRequestOptions,
//          RequestMethod, HTTP_PROVIDERS } from '@angular/http';      
// import { provide, Injectable } from '@angular/core';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { Observable } from 'rxjs/Observable'; 
// import { UserService } from './../service/user_service/user.service';
// import { User } from './../class/user';

// describe('MockBackend: LanguagesServiceHttp', () => {
//   let mockbackend:MockBackend, service:UserService;
//   let errorMessage: string;
//   let users: User[];
  
//   //setup
//   beforeEachProviders(() => [
//     UserService,
//     MockBackend,
//     MockBackend,
//     BaseRequestOptions,
    
//     provide(Http, {
//       useFactory: (backend:MockBackend, options:BaseRequestOptions) => new Http(backend, options), 
//       deps: [MockBackend, BaseRequestOptions]})
//   ]);
  
//   beforeEach(inject([MockBackend, UserService], (_mockbackend:MockBackend, _service:UserService) => {
//     mockbackend = _mockbackend;
//     service = _service;
//   }))

//   // spec for method
//   it('should use an HTTP call to obtain a quote',
//     inject(
//       [UserService, MockBackend],
//       fakeAsync((service: UserService, backend: MockBackend) => {
//         backend.connections.subscribe((connection: MockConnection) => {
//           expect(connection.request.method).toBe(RequestMethod.Get);
//           expect(connection.request.url).toBe('http://localhost:8080/asset/mock-data/user.json');
//         });
//         service.getUser(null);
//       })));

//   // spec for response data from web service
//   it('should parse the server response correctly', inject(
//       [UserService, MockBackend],
//       fakeAsync((service: UserService, backend: MockBackend) => {
//         backend.connections.subscribe((connection: MockConnection) => {

//           let mockResponseBody: any[] = [
//                       {"id":1,"firstname":"user","lastname":"user","email":"user@gmail.com","password":"s12345"},
//                       {"id":2,"firstname":"merchant","lastname":"merchant","email":"merchant@gmail.com","password":"s12345"},
//                       {"id":3,"firstname":"admin","lastname":"admin","email":"admin@gmail.com","password":"s12345"}
//                     ];

//           let response = new ResponseOptions({body: JSON.stringify(mockResponseBody)});
//           connection.mockRespond(new Response(response));
//         });

//         const parsedQuote$ = service.getUser(null)
//         .subscribe(
//             data => this.users = data,
//             error => this.errorMessage = <any>error
//         );
//         // success response from server
//         expect(this.users.length).toBe(3);
//         // fail with response from server
//         expect(errorMessage).not.toBeNull();
//       })));
      
// }) // close describe

/*
// Test with http 
describe('Service: UserService', () => {
  let service:UserService;
  let users: User[];
  let errorMessage: string;
  
  //setup
  beforeEachProviders(() => [
    HTTP_PROVIDERS, 
    UserService
  ]);
  
  beforeEach(inject([UserService], function(s:UserService) {
    service = s;
  }));
  
  //specs
  it('should return available users', function() {
    service.getUser(null).subscribe(
      data => this.users = data,
      error => this.errorMessage = <any>error
    );
    // fail with request
    expect(errorMessage).not.toBeNull();

  });


}) */

// note
//spec for response data
 /* it('should return mocked response', function() {
    let response = [
                    {"id":1,"firstname":"user","lastname":"user","email":"user@gmail.com","password":"s12345"},
                    {"id":2,"firstname":"merchant","lastname":"merchant","email":"merchant@gmail.com","password":"s12345"},
                    {"id":3,"firstname":"admin","lastname":"admin","email":"admin@gmail.com","password":"s12345"}
                  ];
    mockbackend.connections.subscribe(function(connection:MockConnection) {
      connection.mockRespond(new Response(new ResponseOptions(response)));
    });
    service.getUser(null).subscribe(
      data => this.users = data,
      error => this.errorMessage = <any>error
    );
    // Request to webservice successful 
    expect(users[0].getId).toBe(1);
    expect(users[0].getFirstname).toBe("user");
    expect(users[0].getLastname).toBe("user");
    expect(users[0].getEmail).toBe("user@gmail.com");
    expect(users[0].getPassword).toBe("s12345");
    //expect(users.length).toBe(3);
    
    //Request to webservice fail
    //expect(errorMessage).not.toBeNull();
  });*/
