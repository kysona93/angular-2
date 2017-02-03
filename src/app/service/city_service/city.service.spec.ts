import { MockBackend, MockConnection } from '@angular/http/testing';
import { ResponseOptions, Response, Http, BaseRequestOptions, RequestMethod} from '@angular/http';      
import { fakeAsync, async, inject, TestBed, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { MenuService } from './menu.service';
import { ProductDetailPageComponent } from './../../product_detail/product-detail-page.component';

describe('test menu service', () =>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers: [MenuService]
        });
    })
    let service = TestBed.get(MenuService);

    it('something', () => {
        expect("a").toBe("a");
    })

})

/* Test Component 
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductDetailPageComponent } from './../../product_detail/product-detail-page.component';

describe('test component ',() =>{
    it('to make sure ProductDetailPageComponent is Component ', () => {
        beforeEach(() => {

            // refine the test module by declaring the test component
            TestBed.configureTestingModule({
                declarations: [ ProductDetailPageComponent ],
            });

            // create component and test fixture
            let fixture = TestBed.createComponent(ProductDetailPageComponent);

            // get test component from the fixture
            let comp = fixture.componentInstance;
        });
    })
});*/
