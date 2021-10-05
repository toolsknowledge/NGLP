import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgHttpLoaderModule } from "ng-http-loader";
import { SharedModule } from "src/app/common/module/common.module";
import { ACSComponent } from "../component/acs.component";

@NgModule({
    declarations:[ACSComponent],
    imports:[CommonModule,SharedModule,RouterModule.forChild([{path:"",component:ACSComponent}]),NgHttpLoaderModule.forRoot()],
    providers:[],
    exports:[ACSComponent]
})
export class ACSModule{}