import { Component, OnInit, ElementRef } from '@angular/core';
// import service
import { MenuService } from './../../service/home_service/menu.service';
declare var $: any;

@Component({
	selector: 'main-menu',
	templateUrl: 'main-menu.component.html',
	providers: [MenuService] 
})

export class MainMenuComponent implements OnInit{ 
	categories: any[];
	errorMessage: string;
	
	constructor(private _menuService:MenuService,private _eRef:ElementRef){

	}

	ngOnInit(): void{
		this._menuService.getMainMenu()
			.subscribe(
				categories => this.categories = categories,
				error => this.errorMessage = <any>error
			);
		//$(this._eRef.nativeElement);
		$('ul.tabs').tabs();
	
	}

	leaveTab():void {
		//alert("clear tab");
		$("#home").css("display","none");
		$("#category").css("display","none");
		$("#local").css("display","none");
		$("#goods").css("display","none");
		$("#clearance").css("display","none");
		$("#coupon").css("display","none");
		$("#sale").css("display","none");
	}

}