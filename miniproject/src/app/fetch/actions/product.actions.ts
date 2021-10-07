import { createAction,props } from "@ngrx/store";
import { ProductState } from "../state/product.state";
import { PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/product.types";
export const ProductsLoading = createAction(PRODUCTS_LOADING,props<ProductState>());
export const ProductsLoadingSuccess = createAction(PRODUCTS_LOADING_SUCCESS,props<ProductState>());
export const ProductsLoadingFail = createAction(PRODUCTS_LOADING_FAIL,props<ProductState>());