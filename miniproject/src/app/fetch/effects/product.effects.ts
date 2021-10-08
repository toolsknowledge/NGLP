import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsLoading, ProductsLoadingSuccess } from "../actions/product.actions";
import { ProductService } from "../services/product.service";
import { mergeMap,map } from "rxjs/operators";
import { Product } from "../model/product.model";
@Injectable({
    providedIn:"root"
})
export class ProductEffects{
    constructor(private actions$:Actions,
                private service:ProductService){}
    products$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(ProductsLoading),
            mergeMap(()=> this.service.getProducts().pipe(map((posRes:Product[])=>{
                return ProductsLoadingSuccess(posRes);
            })))
        )
    })
}