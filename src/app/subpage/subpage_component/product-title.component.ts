import { Component, OnInit } from '@angular/core';
// import service 
import { MenuService } from './../../service/subpage_service/menu.service';

@Component({
	selector: 'product-title',
	templateUrl: 'product-title.component.html',
	providers: [MenuService]
})

export class ProductTitleComponent implements OnInit {
	category: string="FOOD& DRINK";

	main_categories: any[];
	errorMessage: string;

	constructor(private _menuService:MenuService){

	}

	ngOnInit(): void{
		this._menuService.getMainMenu()
			.subscribe(
				main_categories => this.main_categories = main_categories,
				error => this.errorMessage = <any>error
			);
	}
}