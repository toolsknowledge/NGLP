import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import backendComponent from './backend.component';
import databaseComponent from './database.component';
import frontendComponent from './frontend.component';
import meanComponent from './mean.component';

@NgModule({
  declarations: [
    AppComponent,
    frontendComponent,
    backendComponent,
    databaseComponent,
    meanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [meanComponent]
})
export class AppModule { }
