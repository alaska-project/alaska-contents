import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldComponent } from './components/fields/text-field/text-field.component';
import { LinkFieldComponent } from './components/fields/link-field/link-field.component';
import { ImageFieldComponent } from './components/fields/image-field/image-field.component';
import { MediaFieldComponent } from './components/fields/media-field/media-field.component';
import { HtmlFieldComponent } from './components/fields/html-field/html-field.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { defineCustomElements } from '@alaska-project/contents-core/loader';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ContentEditingService } from './services/content-editing/content-editing.service';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AlaskaContentsSettings } from './models/settings';
import { SettingsService } from './services/settings/settings.service';
import { BackgroundImageFieldComponent } from './components/fields/background-image-field/background-image-field.component';
import { LinkEditorModalComponent } from './components/editors/link-editor-modal/link-editor-modal.component';
import { RichTextEditorModalComponent } from './components/editors/rich-text-editor-modal/rich-text-editor-modal.component';
import { VideoFieldComponent } from './components/fields/video-field/video-field.component';

@NgModule({
  declarations: [
    TextFieldComponent,
    LinkFieldComponent,
    ImageFieldComponent,
    HtmlFieldComponent,
    BackgroundImageFieldComponent,
    RichTextEditorModalComponent,
    LinkEditorModalComponent,
    VideoFieldComponent,
    MediaFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [
    TextFieldComponent,
    LinkFieldComponent,
    ImageFieldComponent,
    MediaFieldComponent,
    HtmlFieldComponent,
    BackgroundImageFieldComponent,
    RichTextEditorModalComponent,
    LinkEditorModalComponent,
    VideoFieldComponent,
  ],
  entryComponents: [
    RichTextEditorModalComponent,
    LinkEditorModalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlaskaContentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlaskaContentsModule,
      providers: [ContentEditingService]
    };
  }
}

export function initializeAlaskaContents(settings: AlaskaContentsSettings) {
  defineCustomElements(window);
  SettingsService.setSettingsInstance(settings);
}

export function loadAlaskaWebComponents() {
  defineCustomElements(window);
}