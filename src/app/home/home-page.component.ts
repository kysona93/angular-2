import { Component, OnInit, ElementRef } from '@angular/core';

// import style 
import './../../../asset/css/index.css'; 
declare var $: any;

@Component({
	templateUrl: 'home-page.component.html'
})
  
export class HomePageComponent implements OnInit{ 
	constructor(private _eRef:ElementRef){}

	ngOnInit(): void{
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