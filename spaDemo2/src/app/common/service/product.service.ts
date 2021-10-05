import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Product from "../model/product.model";
@Injectable({
    providedIn:"root"
})

export class productService{
    constructor(private http:HttpClient){}

    public getProducts(category:string):Observable<Product[]>{
        return this.http.get<Product[]>(`http://meanserver-env.eba-2fccucnx.us-east-2.elasticbeanstalk.com/products/${category}`)   
    }
}