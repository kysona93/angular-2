import { Component, OnInit } from '@angular/core';
// import service
import { ProductService } from './../../service/detailpage_service/product.service';

@Component({
	selector: 'product-picture',
	templateUrl: 'product-picture.component.html',
	providers: [ProductService]
})

export class ProductPictureComponent implements OnInit{
	errorMessage: string;
	product_detail: any[];/*={"name":"Purple Bracelet and Earing with brightening pearl",
 						   "description":[
								{"detail":"Regular sale price: $100"},
								{"detail":"Y-design bracelet and earing with infinity symbol connector"},
								{"detail":"Stone type: pearl"},
								{"detail":"Total number of stones: 1"},
								{"detail":"Shape: round"},
								{"detail":"Stone dimensions: 10mm"},
								{"detail":"Metal: sterling silver"},
								{"detail":"Clasp type: spring lock clasp"}, 
								{"detail":"Lead- and nickel-free"},
								{"detail":"Chain length: 16 with a 2 extender"}
							]
						};*/

	constructor(private _productService:ProductService){

	} 

	ngOnInit(): void{
		this._productService.getProductDetailInfo()
			.subscribe(
				data => this.product_detail = data,
				error => this.errorMessage = <any>error
			);
	}
}