import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldComponent } from './components/fields/text-field/text-field.component';
import { LinkFieldComponent } from './components/fields/link-field/link-field.component';
import { ImageFieldComponent } from './components/fields/image-field/image-field.component';
import { HtmlFieldComponent } from './components/fields/html-field/html-field.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { defineCustomElements } from '@alaska-project/contents-core/loader';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TextFieldComponent, 
    LinkFieldComponent, 
    ImageFieldComponent, 
    HtmlFieldComponent, 
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    TextFieldComponent,
    LinkFieldComponent,
    ImageFieldComponent,
    HtmlFieldComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlaskaContentsModule {
  static forRoot(): ModuleWithProviders {
    defineCustomElements(window);
    return {
      ngModule: AlaskaContentsModule,
      providers: []
    };
  }
}

