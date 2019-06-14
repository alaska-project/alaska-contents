import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldComponent } from './components/fields/text-field/text-field.component';
import { TextFieldEditorComponent } from './components/fields/text-field-editor/text-field-editor.component';
import { LinkFieldEditorComponent } from './components/fields/link-field-editor/link-field-editor.component';
import { LinkFieldComponent } from './components/fields/link-field/link-field.component';
import { ImageFieldComponent } from './components/fields/image-field/image-field.component';
import { ImageFieldEditorComponent } from './components/fields/image-field-editor/image-field-editor.component';
import { HtmlFieldEditorComponent } from './components/fields/html-field-editor/html-field-editor.component';
import { HtmlFieldComponent } from './components/fields/html-field/html-field.component';
import { ContentFieldComponent } from './components/fields/content-field/content-field.component';
import { ContentFieldDefaultComponent } from './components/fields/content-field-default/content-field-default.component';
import { ContentFieldEditorComponent } from './components/fields/content-field-editor/content-field-editor.component';
import { RichTextEditorComponent } from './components/editors/rich-text-editor/rich-text-editor.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { defineCustomElements } from '@alaska-project/contents-core/loader';
import { CommonModule } from '@angular/common';
import { RichTextEditorPopoverComponent } from './components/editors/rich-text-editor-popover/rich-text-editor-popover.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TextFieldComponent, 
    TextFieldEditorComponent, 
    LinkFieldEditorComponent, 
    LinkFieldComponent, 
    ImageFieldComponent, 
    ImageFieldEditorComponent, 
    HtmlFieldEditorComponent, 
    HtmlFieldComponent, 
    ContentFieldComponent, 
    ContentFieldDefaultComponent, 
    ContentFieldEditorComponent, 
    RichTextEditorComponent, 
    RichTextEditorPopoverComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    TextFieldComponent,
    TextFieldEditorComponent,
    LinkFieldEditorComponent,
    LinkFieldComponent,
    ImageFieldComponent,
    ImageFieldEditorComponent,
    HtmlFieldEditorComponent,
    HtmlFieldComponent,
    ContentFieldComponent,
    ContentFieldDefaultComponent,
    ContentFieldEditorComponent,
    RichTextEditorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    RichTextEditorPopoverComponent,
    TextFieldComponent,
    TextFieldEditorComponent,
    LinkFieldEditorComponent,
    LinkFieldComponent,
    ImageFieldComponent,
    ImageFieldEditorComponent,
    HtmlFieldEditorComponent,
    HtmlFieldComponent
  ],
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

