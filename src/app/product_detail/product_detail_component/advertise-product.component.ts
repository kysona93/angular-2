import { Component, OnInit } from '@angular/core';
// import service
import { ProductService } from './../../service/detailpage_service/product.service';

@Component({
	selector: 'advertise-product',
	templateUrl: 'advertise-product.component.html',
	providers: [ProductService]
})

export class AdvertiseProductComponent  implements OnInit{ 
	advertises: any[];
	errorMessage: string;

	constructor(private _productService:ProductService){

	}

	// overite method
	ngOnInit(): void{
		this._productService.getProductInfo()
			.subscribe(
				advertises => this.advertises = advertises,
				error => this.errorMessage = <any>error
			);
	}

}