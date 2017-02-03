import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompanyService{
	
	constructor(private _http:Http){

	}

	getCompanyInfo():Observable<any[]>{
		return this._http.get("http://localhost:8080/asset/mock-data/company.json")
				   .map((response:Response) => <any[]>response.json())
				   //.do(data => console.log('All: ' + JSON.stringify(data)))
				   .catch(this.handleError);
	}

	private handleError(error:Response){
		console.error(error);
		return Observable.throw(error.json().error || "server error");
		
	}

}// close class