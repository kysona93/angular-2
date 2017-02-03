import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Product } from './../../../../class/merchant/product';
import { ProductService } from './../../../../service/merchant_service/product.service';

@Component({
    selector: 'mer-reg-form',
    styles: ['.btn-red {background-color: red;}'],
    templateUrl: 'merchant-reg-form.component.html',
    providers: [ProductService]
})

export class MerchantRegisterFormComponent { 
    private registerForm: FormGroup; 

    constructor(private fb:FormBuilder,private router:Router,private productService:ProductService){ 
        this.registerForm=fb.group({
            item_name: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]{2,200}")])],
            item_unit: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]{2,100}")])],
            firstname: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z]{2,40}")])],
            lastname: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z]{2,40}")])],
            phone_number: ["",Validators.compose([Validators.required,Validators.pattern("[0-9.\+.()]{8,30}")])],
            streetno: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9.\#]{1,20}")])],
            city: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]{2,100}")])],
            province: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]{2,100}")])],
            zipcode: ["",Validators.compose([Validators.required,Validators.pattern("[0-9.\+.()]{1,30}")])],
            website: ["",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]{2,40}")])],
            email: ["",Validators.compose([Validators.required,
	    				Validators.pattern('^[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.[a-z]{2,}$)') ])],
            storefront: ["",Validators.required]
        });
    }
    doRegister(): void{
        let pro=new Product();
        pro.setName=this.registerForm.controls["item_name"].value;
        pro.setAmount=this.registerForm.controls["item_unit"].value;
        pro.setFirstname=this.registerForm.controls["firstname"].value;
        pro.setLastname=this.registerForm.controls["lastname"].value;
        pro.setEmail=this.registerForm.controls["email"].value;
        pro.setPhone=this.registerForm.controls["phone_number"].value;
        pro.setStoreFront=this.registerForm.controls["storefront"].value;
        pro.setStreetno=this.registerForm.controls["streetno"].value;
        pro.setCity=this.registerForm.controls["city"].value;
        pro.setProvince=this.registerForm.controls["province"].value;
        pro.setZipcode=this.registerForm.controls["zipcode"].value;
        pro.setWebsite=this.registerForm.controls["website"].value;

        if(this.productService.saveProduct(pro)){
            swal("Success!", "Submit product success", "success");
        }else{
            swal("Fail!", "Submit product fail", "error");
            this.router.navigate(['/merchant-register/register']);
        }
    }


}