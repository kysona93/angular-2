import { Component, ElementRef, OnInit } from '@angular/core';
declare var $: any;

@Component({
	selector: 'menu',
	templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit{
	constructor(private _er:ElementRef){

	}

	ngOnInit(): void{
		$('ul.tabs').tabs();
	}
}