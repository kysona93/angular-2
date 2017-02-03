import { Component, OnInit } from '@angular/core';
//import * as Collections from 'typescript-collections'; 
//import { Product } from './../../class/product/product';
import { OrderService } from './../../../../service/product_service/order.service';

@Component({
    selector: 'order-list',
    templateUrl: 'order-list.component.html',
    providers: [OrderService]
}) 

export class OrderListComponent implements OnInit{ 
    private products:any[];
    private total:number=0;
    private errorMessage:string;

    constructor(private orderService:OrderService){  }

    ngOnInit(): void{
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

    removeItem():void{
        // swal({   
        //     title: "Are you sure?",
        //     text: "You will not be able to recover this product!",   
        //     type: "warning",   
        //     showCancelButton: true,   
        //     confirmButtonColor: "#DD6B55",   
        //     confirmButtonText: "Delete",   
        //     closeOnConfirm: false }, 
        //     function(){   
        //         swal("Deleted!", "Your product has been deleted.", "success");
        //     });
        event.preventDefault(); 
    }
    

} // close class