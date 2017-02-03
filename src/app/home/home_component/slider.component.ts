import { Component, OnInit, ElementRef } from '@angular/core';
// import service
import { MenuService } from './../../service/home_service/menu.service';
declare var $: any;

@Component({
	selector: 'slider',
	templateUrl: 'slider.component.html',
	providers: [MenuService]
})

export class SliderComponent implements OnInit{
	sliders: any[];
	errorMessage: string;

	constructor(private _menuService:MenuService, private _eRef:ElementRef){

	}
	// overite menthod
	ngOnInit(): void{
		//this.sliders=this._menuService.getSlider();
		this._menuService.getSlider()
			.subscribe(
				sliders => this.sliders = sliders,
				error => this.errorMessage = <any>error
			);

		/*Slide bars*/
		$('.slider').slider({full_width: true});
		// Pause slider
		$('.slider').slider('pause');
		// Start slider
		$('.slider').slider('start');
		// Next slide
		$('.slider').slider('next');
		// Previous slide
		$('.slider').slider('prev');

	}
} 