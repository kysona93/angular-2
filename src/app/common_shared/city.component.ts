import { Component, OnInit } from '@angular/core';
// import service 
import { CityService } from './../common_service/city.service';

@Component({
	selector: 'city',
	templateUrl: 'city.component.html',
	providers: [CityService]
})

export class CityComponent implements OnInit{
	cities: any[];
	errorMessage: string;

	constructor(private _cityService:CityService){ }

	//overite method
	ngOnInit(): void{
		this. _cityService.getCity()
			.subscribe(
				cities => this.cities = cities,
				error => this.errorMessage = <any>error
			);
	}
}