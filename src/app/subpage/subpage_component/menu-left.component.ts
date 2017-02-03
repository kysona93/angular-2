import { Component, OnInit, ElementRef } from '@angular/core';
// import service
import { MenuLeftService } from './../../service/subpage_service/menu-left.service';
declare var $: any;

@Component({
	selector: 'menu-left',
	templateUrl: 'menu-left.component.html',
	providers: [MenuLeftService]
})

export class MenuLeftComponent implements OnInit{ 
	errorMessage: string;
	interested_category: string=" Interested Category";
	interested_categories: any[];

	category: string="Category";
	categories: any[];

	location: string="Location";
	location_shops: any[];

	constructor(private _menuLeftService:MenuLeftService,private _eRef:ElementRef){

	}

	ngOnInit(): void{
		this._menuLeftService.getInterestedMenu()
			.subscribe(
				interested_categories => this.interested_categories = interested_categories,
				error => this.errorMessage = <any>error
			);

		this._menuLeftService.getMainCategory()
			.subscribe(
				categories => this.categories = categories,
				error => this.errorMessage = <any>error
			);

		this._menuLeftService.getLocation()
			.subscribe(
				location_shops => this.location_shops = location_shops,
				error => this.errorMessage = <any>error
			);

	}

}