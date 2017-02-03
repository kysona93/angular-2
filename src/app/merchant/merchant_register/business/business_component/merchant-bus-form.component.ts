import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Business } from './../../../../class/merchant/business';
import { BusinessService } from './../../../../service/merchant_service/business.service';

@Component({
    selector : 'mer-bus-form',
    templateUrl: 'merchant-bus-form.component.html',
    styles: ['.btn-red {background-color: red;}'],
    providers:[BusinessService]
}) 

export class MerchantBusinessFormComponent {  
    private businessForm:FormGroup;

    constructor(private fb:FormBuilder,private router:Router,private businessService:BusinessService){ 
        this.businessForm=this.fb.group({
            business_name: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z]{2,100}")])],
            business_phone: ["",Validators.compose([Validators.required,Validators.pattern("[0-9.\+.()]{6,40}")])],
            business_email:  ["", Validators.compose([Validators.required,
	    				          Validators.pattern('^[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.[a-z]{2,}$)') ])],
            business_zipcode:["",Validators.compose([Validators.required,Validators.pattern("[0-9.\+.()]{2,20}")])],
            firstname: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z]{2,40}")])],
            lastname: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z]{2,40}")])],
            typebusiness: ["",Validators.required]
        });
    }

    doBusiness(): void{
        let bus=new Business();
        // get data and post to server 
        bus.setName=this.businessForm.controls["business_name"].value;
        bus.setPhone=this.businessForm.controls["business_phone"].value;
        bus.setEmail=this.businessForm.controls["business_email"].value;
        bus.setZipcode=this.businessForm.controls["business_zipcode"].value;
        bus.setFirstname=this.businessForm.controls["firstname"].value;
        bus.setLastname=this.businessForm.controls["lastname"].value;
        bus.setTypeBusiness=this.businessForm.controls["typebusiness"].value;

        if(this.businessService.saveBusiness(bus)){
            this.router.navigate(['/merchant/register/merchant-register']);
        }else{
            swal("Fail!", "Business register is fail", "error");
        }
    }

}