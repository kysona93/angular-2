// import { AppComponent } from './../app.component';
// import { RootRouter,Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT, RouteParams } from '@angular/router-deprecated';
// import { SpyLocation } from '@angular/common/testing';
// import { inject, beforeEachProviders, beforeEach} from '@angular/core/testing';
// import { provide } from '@angular/core';
// import { Location } from '@angular/common';

// describe('Router tests', () => {
//   var location:any, router:any;

//   //setup
//   beforeEachProviders(() => [
//     RouteRegistry,
//     provide(Location, {useClass: SpyLocation}),
//     provide(Router, {useClass: RootRouter}),
//     provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent})
//   ]);
  
//   beforeEach(inject([Router, Location], (r:any, l:any) => {
//     router = r;
//     location = l;
//   })); 
  
//   it('Navigate to home', done => {    
//     router.navigate(['Home']).then(() => {
//       expect(location.path()).toBe('');
//       done();
//     })
//   });
 
//   it('Navigate to product sub page', done => {    
//     router.navigate(['Products']).then(() => {
//       expect(location.path()).toBe('/products');
//       done();
//     })
//   });

//   it('Navigate to product city page', done => {    
//     router.navigate(['ProductsCity']).then(() => {
//       expect(location.path()).toBe('/products/city');
//       done();
//     })
//   });

//   it('Navigate to sign in page', done => {    
//     router.navigate(['SignIn']).then(() => {
//       expect(location.path()).toBe('/signin');
//       done();
//     })
//   });

//   it('Navigate to sign up page', done => {    
//     router.navigate(['SignUp']).then(() => {
//       expect(location.path()).toBe('/signup');
//       done();
//     })
//   });

// });

// /*it('redirect other urls to home', done => {
//     router.navigateByUrl('/unknown').then(() => {
//       expect(location.path()).toBe('/home');
//       done();
//     }).catch(e => done.fail(e));
//   });*/