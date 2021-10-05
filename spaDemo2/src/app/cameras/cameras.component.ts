import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerVisibilityService } from "ng-http-loader";
import { productService } from "../common/service/product.service";

@Component({
    selector:"cameras",
    templateUrl:"./cameras.component.html"
})
export class CAMERASComponent{
    camerasList:Array<any> = [];
    category:string;
    constructor(private service:productService,
                private spinner:SpinnerVisibilityService,
                private router:ActivatedRoute){
        this.router.paramMap.subscribe((params:any)=>{
            this.category = params.params.category;
        })
    }
    ngOnInit(){
        this.spinner.show();
        this.service.getProducts(this.category).subscribe((posRes:any)=>{
            this.camerasList = posRes;
            this.spinner.hide();
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
            this.spinner.hide();
        });
    }
}