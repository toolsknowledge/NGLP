import { Component } from "@angular/core";

@Component({
    selector:"database",
    templateUrl:"./database.component.html"
})
export default class databaseComponent{
    message:string;
    constructor(){
        this.message = "MongoDB";
    }
}