import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../class/product/product';
import { UserAddress } from './../../class/user/user_address';

@Injectable()
export class OrderService {
    private products:Product[];
    private errMessage:string;

	constructor(private _http:Http){ }

	getOrderedProducts(): Observable<Product[]>{ // 
		return this._http.get("http://localhost:8080/asset/mock-data/ordered_product.json")
				   .map((response:Response) => <Product[]>response.json())
				   //.do(data => console.log('All ordered product: ' + JSON.stringify(data))) 
				   .catch(this.handleError);         
	}

	orderProduct(basket_id:string,user_id:number,pro_id:number):Observable<Product[]>{
		let headers = new Headers();
  		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.post("http://localhost:9000/api/v1/orderproduct",
								JSON.stringify({"basket_id":basket_id,"user_id":user_id,"pro_id":pro_id}),
								{ headers: headers })
				   .map((response:Response) => <Product[]>response.json())
				   .catch(this.handleError);
	}

	orderProducts(pro_ids:string[]):Observable<boolean>{
		let headers = new Headers();
  		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.post("http://localhost:9000/api/v1/orderproduct", JSON.stringify(pro_ids),{ headers: headers })
				   .map((response:Response) => <boolean>response.json())
				   .catch(this.handleError);
	}
	// user location that bought products
	saveLocation(addr:UserAddress):Observable<boolean>{
		let headers = new Headers();
  		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.post("http://localhost:9000/api/v1/orderproduct", JSON.stringify(addr),{ headers: headers })
				   .map((response:Response) => <boolean>response.json())
				   .catch(this.handleError);
	}

	private handleError(error:Response){
		console.error(error);
		return Observable.throw(error.json().error || "server error");
	}

}