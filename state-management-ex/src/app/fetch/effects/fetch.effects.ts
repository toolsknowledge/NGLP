import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsLoading, ProductsLoadingFail, ProductsLoadingSuccess } from "../actions/fetch.actions";
import { FetchService } from "../service/fetch.service";
import { mergeMap,map, catchError } from "rxjs/operators";
import { FetchModel } from "../model/fetch.model";
import { of } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class FetchEffects{
    constructor(private actions$:Actions,
                private service:FetchService){}


    fecth$ = createEffect(()=> this.actions$.pipe(
        ofType(ProductsLoading),
        mergeMap(()=>{
            return this.service.getProducts().pipe(map((posRes:FetchModel[])=>{
                return ProductsLoadingSuccess({"products":posRes});
            }),catchError((err:any)=>
                of(ProductsLoadingFail({"error":"Network Error"}))
            ))
        })
    ))



}