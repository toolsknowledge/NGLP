import { FetchModel } from "../model/fetch.model";

export interface FetchState{
    loading:boolean;
    products:FetchModel[];
    error:string;
}