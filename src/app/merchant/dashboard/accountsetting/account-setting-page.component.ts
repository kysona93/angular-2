import { Component, OnInit, ElementRef} from '@angular/core';
declare var $: any;

@Component({
	templateUrl: 'account-setting-page.component.html'
})

export class MerchantAccountSettingComponent implements OnInit{ 
	private user:any[];

	constructor(private _eRef:ElementRef){ }

	ngOnInit(): void{
		$('ul.tabs').tabs();
	}
}