import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import service
import { ProductService } from './../../service/detailpage_service/product.service';
import { OrderService } from './../../service/product_service/order.service';
//import * as Collections from 'typescript-collections';
//import { Product } from './../../class/product/product';
declare var $:any;

@Component({ 
	selector: 'product-desc', 
	templateUrl: 'product-desc.component.html', 
	providers: [ProductService,OrderService]
})

export class ProductDescComponent implements OnInit{ 
	private errorMessage: string;
	private product_sell: any;
	private product_detail: any[];
	private product_pics: any[];
	private cur_pic:string="./../../../../asset/images/flower1.jpg";
	private picture:string;
	private sub:any;
	//@Input() picname:string;

	//private proSet = new Collections.Set<Product>();	
	public static count:number = 0;
	private imageForm:any;

	constructor(private _productService:ProductService,private orderService:OrderService,
				private router:Router,private er:ElementRef){ 
	} 

	// overide method onInit
	ngOnInit(): void{
		
		// product description
		this._productService.getProductSellInfo()
							.subscribe(
								data => this.product_sell = data,
								error => this.errorMessage = <any>error
							);
		// product picture
		this._productService.getProductDetailInfo()
							.subscribe(
								data => this.product_detail = data,
								error => this.errorMessage = <any>error
							);	
		// product pictures
		this._productService.getProductPicture()
							.subscribe(
								data => this.product_pics = data,
								error => this.errorMessage = <any>error
							);
	
	} 

	addToCart():void{
		ProductDescComponent.count+=1;
		//alert("amount of product"+this.getAmountOrdered());
		let basket=JSON.parse(localStorage.getItem("basket_id")); // include basket_id, user_id
		if(basket == null ){
			this.router.navigate(['signin']);
		}else{ 
			//post basket id, user id, product id
			this.orderService.orderProduct(basket.id,basket.user_id,this.product_sell.pro_id);
		}
	}

	public getAmountOrdered():number{
		this.sub=ProductDescComponent.count; 
		return this.sub;
	}

	showImage():void{
		
		//alert($("img.bb").attr('src'));
		//this.cur_pic=$("img.bb").attr('src');
	}
	

} // close class 