import { Component, OnInit } from '@angular/core';
// import service
import { CompanyInfoService } from './../common_service/company-info.service';

@Component({
	selector: 'company-info',
	templateUrl: 'company-info.component.html',
	providers: [CompanyInfoService]
})

export class CompanyInfoComponent implements OnInit{
	companies: any[];
	errorMessage: string;
	
	constructor(private _companyInfoService:CompanyInfoService){ }

	//overite method
	ngOnInit(): void{
		this. _companyInfoService.getCompanyInfo()
			.subscribe(
				companies => this.companies = companies,
				error => this.errorMessage = <any>error
			);
	}
}