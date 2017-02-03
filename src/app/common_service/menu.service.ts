import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService{

	constructor(private _http:Http){

	}

	getMainMenu(): Observable<any[]>{
		return this._http.get("http://localhost:8080/asset/mock-data/category.json")
				   .map((response:Response) => <any[]>response.json())
				   //.do(data => console.log('All: ' + JSON.stringify(data)))
	 			   .catch(this.handleError);
	}

	getSlider(): Observable<any[]>{
		return this._http.get("http://localhost:8080/asset/mock-data/slider.json")
				   .map((response:Response) => <any[]>response.json())
				   //.do(data => console.log('All: ' + JSON.stringify(data)))
				   .catch(this.handleError);
	}

	getFilter(): Observable<any[]>{
		return this._http.get("http://localhost:8080/asset/mock-data/filter_product.json")
				   .map((response:Response) => <any[]>response.json())
				   //.do(data => console.log('All: ' + JSON.stringify(data)))
				   .catch(this.handleError);
	}

	clearFilter(): Observable<any[]>{
		return this._http.get("http://localhost:8080/asset/mock-data/none.json")
				   .map((response:Response) => <any[]>response.json())
				   //.do(data => console.log('All: ' + JSON.stringify(data)))
				   .catch(this.handleError);
	}

	private handleError(error:Response){
		console.error(error);
		return Observable.throw(error.json().error || "server error");
		
	}

	getNames() {
    	return ['raja', 'victor', 'albert'];
    }
    
   getMenu(){
		return [
            {
              "link":"page/product_sub_page.html",
              "name":"Food & Drink"
            },
            {
              "link":"page/product_sub_page.html",
              "name":"Cloth"
            },
            {
              "link":"page/product_sub_page.html",
              "name":"Restaurant"
            },
            {
              "link":"page/product_sub_page.html",
              "name":"Delivery & Service"
            },
            {
              "link":"page/product_sub_page.html",
              "name":"Tour"
            }
          ];
	}

}//close class