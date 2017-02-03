import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../../../service/product_service/order.service';

@Component({
    selector: 'checkout-summary',
    templateUrl: 'checkout-summary.component.html',
    providers: [OrderService]
})

export class CheckoutSummaryComponent implements OnInit{ 
    private errorMessage:string;
    private products:any[];
    private total:number=0;

    constructor(private orderService:OrderService){ }

    ngOnInit():void{
        this.orderService.getOrderedProducts()
           .subscribe(
                data => this.catchData(data),
                error => this.errorMessage = <string>error
            ); 
    }

    catchData(pro:any[]){
       this.products=pro;
       // calculate total cost of ordered products
       for(let i=0;i<this.products.length;i++){
           this.total+= (this.products[i].price*this.products[i].qty);
       }
    }


} 