import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../state/product.state";

export const productSelector = createSelector(createFeatureSelector<ProductState>("products"),(state)=>{
    return state;
});