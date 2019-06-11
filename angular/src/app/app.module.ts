import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlaskaContentsModule } from 'projects/alaska-contents/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlaskaContentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
