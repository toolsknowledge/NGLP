import { Product } from "../model/product.model";

export interface ProductState{
    loading:boolean;
    products:Product[];
    error:string;
}