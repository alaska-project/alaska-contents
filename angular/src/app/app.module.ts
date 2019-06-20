import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlaskaContentsModule } from 'projects/alaska-contents/src/public-api';
import { environment } from 'src/environments/environment';
import { StaticItemComponent } from './components/static-item/static-item.component';
import { DynamicItemComponent } from './components/dynamic-item/dynamic-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticItemComponent,
    DynamicItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    AlaskaContentsModule.forRoot(environment.contentEditing)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
