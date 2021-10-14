import { createAction, props } from "@ngrx/store";
import { FetchModel } from "../model/fetch.model";

import { PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/fetch.types";

export const ProductsLoading = createAction(PRODUCTS_LOADING);
export const ProductsLoadingSuccess = createAction(PRODUCTS_LOADING_SUCCESS,props<{"products":FetchModel[]}>());
export const ProductsLoadingFail = createAction(PRODUCTS_LOADING_FAIL,props<{"error":string}>());