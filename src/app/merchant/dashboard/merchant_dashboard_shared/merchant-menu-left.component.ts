import { Component, OnInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
	selector: 'merchant-menu-left',
	templateUrl: 'merchant-menu-left.component.html'
})

export class MerchantMenuLeftComponent implements OnInit{ 
	constructor(private _eRef:ElementRef){ }

	ngOnInit(): void{
		$('.collapsible').collapsible({
      		accordion : false
    	});
	}

	
}