import { Component } from "@angular/core";

@Component({
    selector:"backend",
    templateUrl:"./backend.component.html"
})
export default class backendComponent{
    message:string;
    constructor(){
        this.message = "NodeJS";
    }
}