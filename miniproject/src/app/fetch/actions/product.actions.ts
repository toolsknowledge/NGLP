import { createAction,props } from "@ngrx/store";
import { PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/product.types";
export const ProductsLoading = createAction(PRODUCTS_LOADING);
export const ProductsLoadingSuccess = createAction(PRODUCTS_LOADING_SUCCESS,props<any>());
export const ProductsLoadingFail = createAction(PRODUCTS_LOADING_FAIL);