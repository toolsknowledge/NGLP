import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { ProductsLoading } from "../actions/product.actions";
import { productSelector } from "../selector/product.selector";
import { ProductState } from "../state/product.state";

@Component({
    selector:"products",
    templateUrl:"./product.component.html"
})
export class ProductsComponent{
    result:any;
    constructor(private store:Store<ProductState>){}
    ngOnInit(){
        //subscription
        this.store.select(productSelector).subscribe((posRes)=>{
            this.result = posRes;
        });


        //dispatch
        this.store.dispatch(ProductsLoading());
    }
}