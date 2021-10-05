import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgHttpLoaderModule } from "ng-http-loader";
import { SharedModule } from "../common/module/common.module";
import { CAMERASComponent } from "./cameras.component";

@NgModule({
    declarations:[CAMERASComponent],
    imports:[CommonModule,SharedModule,HttpClientModule,RouterModule.forChild([{path:"",component:CAMERASComponent}]),NgHttpLoaderModule.forRoot()],
    providers:[],
    exports:[CAMERASComponent]
})
export class CAMERASModule{}