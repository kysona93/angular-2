import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
	
	constructor(private _http:Http){ }

	getProductSellInfo(): Observable<any[]>{
		return this._http.get("http://localhost:8080/asset/mock-data/product_sell.json")
				   .map((response:Response) => <any[]>response.json())
				   //.do(data => console.log('All: ' + JSON.stringify(data)))
				   .catch(this.handleError);
	}

	getProductDetailInfo(): Observable<any[]>{
		return this._http.get("http://localhost:8080/asset/mock-data/product_infor.json")
				   .map((response:Response) => <any[]>response.json())
				   //.do(data => console.log('All: ' + JSON.stringify(data)))
				   .catch(this.handleError);
	}

	getProductInfo(): Observable<any[]>{
		return this._http.get("http://localhost:8080/asset/mock-data/product_info.json")
				   .map((response:Response) => <any[]>response.json())
				   //.do(data => console.log('All: ' + JSON.stringify(data)))
				   .catch(this.handleError);
	}

	getProductPicture(): Observable<any[]>{
		return this._http.get("http://localhost:8080/asset/mock-data/product_pics.json")
				   .map((response:Response) => <any[]>response.json())
				   //.do(data => console.log('All flower: ' + JSON.stringify(data)))
				   .catch(this.handleError);
	}
	
	private handleError(error:Response){
		console.error(error);
		return Observable.throw(error.json().error || "server error");
		
	}

}// close class