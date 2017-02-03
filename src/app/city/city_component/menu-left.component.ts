import { Component, OnInit } from '@angular/core';

// import service
import { MenuLeftService } from './../../service/subpage_service/menu-left.service';

@Component({
	selector: 'menu-left',
	templateUrl: 'menu-left.component.html',
	providers: [MenuLeftService]
})

export class MenuLeftComponent implements OnInit{ 
	category: string="Category";
	categories: any[];
	errorMessage: string;

	constructor(private _menuLeftService:MenuLeftService){

	}

	ngOnInit(): void{
		this._menuLeftService.getMainCategory()
			.subscribe(
				categories => this.categories = categories,
				error => this.errorMessage = <any>error
			);
	}
}