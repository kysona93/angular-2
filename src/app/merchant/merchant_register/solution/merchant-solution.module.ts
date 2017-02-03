import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// shared module 
// import { CommonSharedModule } from './../../../common_shared/common-shared.module';
// import { MerchantRegisterSharedModule } from './../merchant_register_shared/merchant-shared.module';
// nested component 
import { MerchantCommentComponent } from './solution_component/merchant-comment.component';
import { MerchantPopularQuestionComponent } from './solution_component/merchant-pop-question.component';

import { MerchantSolutionComponent } from './merchant-solution.component';

@NgModule({
    imports: [CommonModule, RouterModule ],
    declarations: [MerchantSolutionComponent,MerchantCommentComponent,MerchantPopularQuestionComponent],
    exports: [MerchantSolutionComponent,MerchantCommentComponent,MerchantPopularQuestionComponent]
})
export class MerchantSolutionModule { }