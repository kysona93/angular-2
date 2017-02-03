import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuLeftService {
	constructor(private _http:Http){

	}

	getFilter(): Observable<any[]>{
		return this._http.get("http://localhost:8080/asset/mock-data/filter_product.json")
				   .map((response:Response) => <any[]>response.json())
				   //.do(data => console.log('All: ' + JSON.stringify(data)))
				   .catch(this.handleError);
	}

	getMainCategory(): Observable<any[]>{
		return this._http.get("http://localhost:8080/asset/mock-data/main_category.json")
				   .map((response:Response) => <any[]>response.json())
				   //.do(data => console.log('All: ' + JSON.stringify(data)))
				   .catch(this.handleError);
	}

	private handleError(error:Response){
		console.error(error);
		return Observable.throw(error.json().error || "server error");
		
	}
}