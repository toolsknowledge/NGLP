import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { productService } from "../service/product.service";

@NgModule({
    declarations:[],
    imports:[CommonModule,HttpClientModule],
    providers:[productService],
    exports:[]
})
export class SharedModule{}