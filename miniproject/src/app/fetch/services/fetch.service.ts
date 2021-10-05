import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Product from "../model/fetch.model";
@Injectable({
    providedIn:"root"
})
export class FetchService{
    constructor(private http:HttpClient){}
    public getProducts():Observable<Product[]>{
        return this.http.get<Product[]>("http://localhost:8080/fetch");
    }
}