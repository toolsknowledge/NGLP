import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpinnerVisibilityService } from "ng-http-loader";
import Product from "src/app/common/model/product.model";
import { productService } from "src/app/common/service/product.service";

@Component({
    selector:"acs",
    templateUrl:"./acs.component.html"
})
export class ACSComponent{
    category:string;
    acsList:Product[] = [];

    constructor(private service:productService,
                private spinner:SpinnerVisibilityService,
                private router:ActivatedRoute){

        this.router.paramMap.subscribe((posRes:any)=>{
            this.category = posRes.params.category;
        })
    }

    ngOnInit(){
        this.spinner.show();
        this.service.getProducts(this.category).subscribe((posRes:Product[])=>{
            this.acsList = posRes;
            this.spinner.hide();
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
            this.spinner.hide();
        })
    }
}