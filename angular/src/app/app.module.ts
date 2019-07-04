import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlaskaContentsModule, ContentsService, ContextService, ContentEditingService } from 'projects/alaska-contents/src/public-api';
import { StaticItemComponent } from './components/static-item/static-item.component';
import { DynamicItemComponent } from './components/dynamic-item/dynamic-item.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { StaticItemPageComponent } from './pages/static-item-page/static-item-page.component';
import { DynamicItemPageComponent } from './pages/dynamic-item-page/dynamic-item-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticItemComponent,
    DynamicItemComponent,
    NavbarComponent,
    StaticItemPageComponent,
    DynamicItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    AlaskaContentsModule.forRoot()
  ],
  providers: [
    ContentsService,
    ContentEditingService,
    ContextService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
