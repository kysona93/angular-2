import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// classed
import { Card } from './../../../../class/order/card';
import { UserAddress } from './../../../../class/user/user_address';
import { Product } from './../../../../class/product/product';
// service
import { OrderService } from './../../../../service/product_service/order.service';

@Component({
    selector: 'checkout-card',
    templateUrl: 'checkout-card.component.html',
    styles: ['.btn-red {background-color: red;}'],
    providers: [OrderService]
})

export class CheckoutCardComponent { 
    private checkoutForm: FormGroup;
    private errorMessage:string;
    private products:any[];
    private total:number=0;

    constructor(private fb: FormBuilder,private orderService:OrderService){
        this.checkoutForm=this.fb.group({
            name_card:["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]{2,40}")])],
            number_card:["",Validators.compose([Validators.required,Validators.pattern("[0-9]{2,40}")])],
            exp_date: ["",Validators.required],
            sec_code: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]{2,60}")])],
            bill_addr: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9./#]{2,200}")])],
            city: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]{2,100}")])],
            province: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]{2,200}")])],
            postal_code: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]{2,200}")])]
        });
        // set ordered products data into table summary ordered
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

    checkout():void{
        let card=new Card();
        let user_addr=new UserAddress();
        let products:any[];
        // set data to card object
        card.setCardName=this.checkoutForm.controls["name_card"].value;
        card.setCardNumber=this.checkoutForm.controls["number_card"].value;
        card.setExpDate=this.checkoutForm.controls["exp_date"].value;
        card.setSecurityCode=this.checkoutForm.controls["sec_code"].value;
        // set data to user address
        user_addr.setBillAddress=this.checkoutForm.controls["bill_addr"].value;
        user_addr.setCity=this.checkoutForm.controls["city"].value;
        user_addr.setProvince=this.checkoutForm.controls["province"].value;
        user_addr.setPostalCode=this.checkoutForm.controls["postal_code"].value;

        let success_chk:boolean=true;
        if(success_chk){
            //swal("Success", "Successful with checkout.", "success");
        }else{
            //swal("Fail", "Fail with checkout!", "error");
        }
        /*
        // post product info to server
        let pro_ids=new Array<string>(this.products.length-1);
        for(let i=0;i<this.products.length;i++) pro_ids[i]=this.products[i].id;
        this.orderService.orderProducts(pro_ids).subscribe(
            data => { 
                let success:boolean = data;
                if(success){
                    swal("Success", "Successful with checkout", "success");
                }else{
                    swal("Fail", "Fail with checkout!", "fail")
                }
            }
        );
        // post user address info to server
        this.orderService.saveLocation(user_addr);
        */
        event.preventDefault(); 
    }

}