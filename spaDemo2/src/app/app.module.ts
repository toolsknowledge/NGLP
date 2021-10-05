import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { authGuard } from './auth.guard';
import { MasterComponent } from './master.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
        {path:"cameras/:category",loadChildren:()=>import("./cameras/cameras.module").then(m=>m.CAMERASModule),canLoad:[authGuard]},
        {path:"vms/:category",loadChildren:()=>import("./vms/vms.module").then(m=>m.VMSModule),canLoad:[authGuard]},
        {path:"acs/:category",loadChildren:()=>import("./acs/module/acs.module").then(m=>m.ACSModule),canLoad:[authGuard]}
    ])
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
