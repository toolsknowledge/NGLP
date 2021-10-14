import { createReducer, on } from "@ngrx/store";
import { ProductsLoading, ProductsLoadingFail, ProductsLoadingSuccess } from "../actions/fetch.actions";
import { FetchState } from "../state/fetch.state";

export const initialState:FetchState = {
    loading:false,
    products:[],
    error:""
}

export const _fetchReducer = createReducer(initialState,on(ProductsLoading,(state)=>{
    return{
        ...state,
        error:"",
        products:[],
        loading:false
    }
}),on(ProductsLoadingSuccess,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:action.products,
        error:""
    }
}),on(ProductsLoadingFail,(state,action)=>{
    return{
        ...state,
        loading:true,
        products:[],
        error:action.error
    }
}))

export function FetchReducer(state:any,action:any){
    return _fetchReducer(state,action);
}