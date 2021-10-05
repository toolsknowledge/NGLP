import { Component } from "@angular/core";

@Component({
    selector:"frontend",
    templateUrl:"./frontend.component.html"
})

export default class frontendComponent{
    message:string;
    constructor(){
        this.message = "Angular 12";
    }
}