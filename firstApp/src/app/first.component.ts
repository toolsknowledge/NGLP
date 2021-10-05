import { Component } from "@angular/core";

@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})
export class firstComponent{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;
    constructor(){
        this.sub_one = "Angular12";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    }
    public getSubOne():string{
        return this.sub_one;
    }
    public getSubTwo():string{
        return this.sub_two;
    }
    public getSubThree():string{
        return this.sub_three;
    }
}