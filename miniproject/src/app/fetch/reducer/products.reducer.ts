import { ProductsLoading, ProductsLoadingFail, ProductsLoadingSuccess } from "../actions/product.actions"
import { ProductState } from "../state/product.state"

const initialState:ProductState = {
    loading:false,
    products:[],
    error:""
}

export const ProductsReducer = (state=initialState,action:any)=>{
    console.log(action);
    switch(action.type){
        case ProductsLoading:
            return{
                ...state,
                loading:false,
                products:[],
                error:""
            }
        case ProductsLoadingSuccess:
            return{
                ...state,
                loading:true,
                products:action,
                error:""
            }
        case ProductsLoadingFail:
            return{
                ...state,
                loading:true,
                products:[],
                error:"Network Error"
            }
        default:
            return state;
    }
}