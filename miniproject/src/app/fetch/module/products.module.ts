import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ProductsComponent } from "../components/product.component";
import { ProductEffects } from "../effects/product.effects";
import { ProductsReducer } from "../reducer/products.reducer";

@NgModule({
    declarations:[ProductsComponent],
    imports:[CommonModule,
             EffectsModule.forFeature([ProductEffects]),
             StoreModule.forFeature("products",ProductsReducer),
             HttpClientModule,
             RouterModule.forChild([{path:"",component:ProductsComponent}])],
    providers:[],
    exports:[ProductsComponent]
})
export class ProductsModule{}