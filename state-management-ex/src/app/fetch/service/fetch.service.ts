import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FetchModel } from "../model/fetch.model";
@Injectable({
    providedIn:"root"
})
export class FetchService{
    constructor(private http:HttpClient){}
    public getProducts():Observable<FetchModel[]>{
        return this.http.get<FetchModel[]>("http://localhost:8080/fetch");
    };
};