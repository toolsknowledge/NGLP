import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpinnerVisibilityService } from "ng-http-loader";
import { productService } from "../common/service/product.service";

@Component({
    selector:"vms",
    templateUrl:"./vms.component.html"
})
export class VMSComponent{
    vmsList:Array<any> = [];
    category:string;
    constructor(private service:productService,
                private spinner:SpinnerVisibilityService,
                private router:ActivatedRoute){
                    this.router.paramMap.subscribe((posRes:any)=>{
                        console.log(posRes);
                        this.category = posRes.params.category;
                    });
    }
        
    ngOnInit(){
        
        this.spinner.show();
        this.service.getProducts(this.category).subscribe((posRes)=>{
            this.vmsList = posRes;
            this.spinner.hide();
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
            this.spinner.hide();
        });
    }
}