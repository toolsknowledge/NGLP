import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FetchComponent } from "../components/fetch.component";
import { FetchEffects } from "../effects/fetch.effects";
import { FetchReducer } from "../reducer/fetch.reducer";
@NgModule({
    declarations:[FetchComponent],
    imports:[CommonModule,
             EffectsModule.forFeature([FetchEffects]),
             StoreModule.forFeature("products",FetchReducer),
             RouterModule.forChild([{path:"",component:FetchComponent}])],
    providers:[],
    exports:[FetchComponent]
})
export class FetchModule{}