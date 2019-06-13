import { Injectable } from '@angular/core';
import { FieldDefinition, FieldsMap } from '../../models/fields';
import { ContentMode } from '@alaska-project/contents-core/dist/types/models/component-models';
import { TextFieldComponent } from '../../components/fields/text-field/text-field.component';
import { TextFieldEditorComponent } from '../../components/fields/text-field-editor/text-field-editor.component';
import { HtmlFieldComponent } from '../../components/fields/html-field/html-field.component';
import { HtmlFieldEditorComponent } from '../../components/fields/html-field-editor/html-field-editor.component';
import { ImageFieldComponent } from '../../components/fields/image-field/image-field.component';
import { ImageFieldEditorComponent } from '../../components/fields/image-field-editor/image-field-editor.component';
import { LinkFieldComponent } from '../../components/fields/link-field/link-field.component';
import { LinkFieldEditorComponent } from '../../components/fields/link-field-editor/link-field-editor.component';

@Injectable({
  providedIn: 'root'
})
export class FieldResolverService {

  private readonly defaultFieldDefinitions: FieldDefinition[] = [{
    fieldType: 'string',
    defaultFieldComponentType: TextFieldComponent,
    editingFieldComponentType: TextFieldEditorComponent,
  }, {
    fieldType: 'html',
    defaultFieldComponentType: HtmlFieldComponent,
    editingFieldComponentType: HtmlFieldEditorComponent,
  }, {
    fieldType: 'image',
    defaultFieldComponentType: ImageFieldComponent,
    editingFieldComponentType: ImageFieldEditorComponent,
  }, {
    fieldType: 'link',
    defaultFieldComponentType: LinkFieldComponent,
    editingFieldComponentType: LinkFieldEditorComponent,
  }];

  private fieldsMap: FieldsMap = {};

  constructor() { 
    this.defaultFieldDefinitions.forEach(x => this.registerField(x));
  }

  registerField(fieldDefinition: FieldDefinition) {
    this.fieldsMap[fieldDefinition.fieldType] = fieldDefinition;
  }

  resolveFieldComponent(fieldType: string, mode: ContentMode) {
    const fieldDefinition = this.resolveField(fieldType);
    switch (mode) {
      case 'Default':
        return fieldDefinition.defaultFieldComponentType;
      case 'Editing':
        return fieldDefinition.editingFieldComponentType;
      default:
        throw new Error(`invelid mode ${mode}`);
    }
  }

  resolveField(fieldType: string) {
    const definition = this.fieldsMap[fieldType];
    if (!definition) {
      throw new Error(`Cannot resolve field ${fieldType}`);
    }
    return definition;
  }
}
