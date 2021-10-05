import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MasterComponent } from './master.component';
import { ShirtsComponent } from './shirts.component';
import { PantsComponent } from './pants.component';
import { KidsComponent } from './kids.component';
import { RouterModule } from '@angular/router';
import { NikiComponent } from './niki.component';
import { PoloComponent } from './polo.component';
import { JeansComponent } from './jeans.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    ShirtsComponent,
    PantsComponent,
    KidsComponent,
    NikiComponent,
    PoloComponent,
    JeansComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
        {path:"shirts",component:ShirtsComponent,children:[{path:"niki",component:NikiComponent}],canActivate:[AuthService]},
        {path:"pants",component:PantsComponent,children:[{path:"polo",component:PoloComponent}],canDeactivate:[AuthService]},
        {path:"kids",component:KidsComponent,children:[{path:"jeans",component:JeansComponent}],canActivateChild:[AuthService]}
    ])
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
