import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../class/merchant/product';

@Injectable()
export class ProductService{
    constructor(private http:Http){}
    saveProduct(pro:Product):boolean{
         /*let headers = new Headers();
         let res:any;
         let msgErr:any;

         headers.append('Content-Type', 'application/x-www-form-urlencoded');
         this.http.post('http://localhost:8080/api-doc/create', bus, {
            headers: headers
            })
            .map(res => res.json())
            .subscribe(
            data => res = data,
            err => msgErr = err,
            () => console.log('Authentication Complete')
            );
        if(msgErr ==null ) return true;
        else return false;*/
        return true;
    }
    
}