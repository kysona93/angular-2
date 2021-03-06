import { Component } from '@angular/core';
//import service
import { MenuService } from './../../service/detailpage_service/menu.service';

@Component({
	selector: 'search-area',
	templateUrl: 'search.component.html',
	/*styles: [`
		.filter_area{ 
			width:92%;
			height:auto;
			background-color:white;
			display:block;
			z-index:2;
			position:absolute;  
			margin-left:5%;
		}
	`],*/
	providers: [MenuService]
})

export class SearchComponent {
	private text_search: string="";
	private isFilter: boolean=false;
	private items: any[];
	private errorMessage: string;

	constructor(private _menuService:MenuService){ }

	pressSearch(): void{
		if(this.text_search!=""){
				// add class filter-area to div element and set items data
				this.isFilter=true; 
				
				// get data from api
				this._menuService.getFilter()
					.subscribe(
						items => this.items = items,
						error => this.errorMessage = <any>error
					);
				 
			}else{
				// remove class filter-area from div element and clear items data
				this.isFilter=false;
				this.items=null;
				
			}
	}

	leaveSearch():void {
		this.isFilter=false;
		this.items=null;
	}

	overSearch():void {
		if(this.text_search!=""){
			this.isFilter=true; 
				
			this._menuService.getFilter()
				.subscribe(
					data => this.items = data,
					error => this.errorMessage = <any>error
				);
				 
		}else{
			this.isFilter=false;
			this.items=null;				
		}
	}

}