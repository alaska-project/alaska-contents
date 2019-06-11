/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ContentField,
  FieldData,
  ImageFieldData,
  LinkFieldData,
} from './models/content-models';
import {
  ContentMode,
} from './models/component-models';
import {
  EventObj,
} from './components/editors/rich-text-editor/rich-text-editor-component';
import {
  TinyMceSettings,
} from './models/tinymce-models';

export namespace Components {
  interface AlyContentField {
    'setField': (field: ContentField<any>) => Promise<void>;
    'setMode': (mode: ContentMode) => Promise<void>;
  }
  interface AlyContentFieldDefault {
    'field': FieldData<any>;
  }
  interface AlyContentFieldEditor {
    'field': FieldData<any>;
  }
  interface AlyHtmlField {
    'field': FieldData<any>;
  }
  interface AlyHtmlFieldEditor {
    'field': FieldData<any>;
  }
  interface AlyImageField {
    'field': FieldData<ImageFieldData>;
  }
  interface AlyImageFieldEditor {
    'field': FieldData<ImageFieldData>;
  }
  interface AlyLinkField {
    'field': FieldData<LinkFieldData>;
  }
  interface AlyLinkFieldEditor {
    'field': FieldData<LinkFieldData>;
  }
  interface AlyRichTextEditor {
    'initialize': (settings: TinyMceSettings, value: string) => Promise<void>;
  }
  interface AlyTextField {
    'field': FieldData<string>;
  }
  interface AlyTextFieldEditor {
    'field': FieldData<string>;
  }
}

declare global {


  interface HTMLAlyContentFieldElement extends Components.AlyContentField, HTMLStencilElement {}
  var HTMLAlyContentFieldElement: {
    prototype: HTMLAlyContentFieldElement;
    new (): HTMLAlyContentFieldElement;
  };

  interface HTMLAlyContentFieldDefaultElement extends Components.AlyContentFieldDefault, HTMLStencilElement {}
  var HTMLAlyContentFieldDefaultElement: {
    prototype: HTMLAlyContentFieldDefaultElement;
    new (): HTMLAlyContentFieldDefaultElement;
  };

  interface HTMLAlyContentFieldEditorElement extends Components.AlyContentFieldEditor, HTMLStencilElement {}
  var HTMLAlyContentFieldEditorElement: {
    prototype: HTMLAlyContentFieldEditorElement;
    new (): HTMLAlyContentFieldEditorElement;
  };

  interface HTMLAlyHtmlFieldElement extends Components.AlyHtmlField, HTMLStencilElement {}
  var HTMLAlyHtmlFieldElement: {
    prototype: HTMLAlyHtmlFieldElement;
    new (): HTMLAlyHtmlFieldElement;
  };

  interface HTMLAlyHtmlFieldEditorElement extends Components.AlyHtmlFieldEditor, HTMLStencilElement {}
  var HTMLAlyHtmlFieldEditorElement: {
    prototype: HTMLAlyHtmlFieldEditorElement;
    new (): HTMLAlyHtmlFieldEditorElement;
  };

  interface HTMLAlyImageFieldElement extends Components.AlyImageField, HTMLStencilElement {}
  var HTMLAlyImageFieldElement: {
    prototype: HTMLAlyImageFieldElement;
    new (): HTMLAlyImageFieldElement;
  };

  interface HTMLAlyImageFieldEditorElement extends Components.AlyImageFieldEditor, HTMLStencilElement {}
  var HTMLAlyImageFieldEditorElement: {
    prototype: HTMLAlyImageFieldEditorElement;
    new (): HTMLAlyImageFieldEditorElement;
  };

  interface HTMLAlyLinkFieldElement extends Components.AlyLinkField, HTMLStencilElement {}
  var HTMLAlyLinkFieldElement: {
    prototype: HTMLAlyLinkFieldElement;
    new (): HTMLAlyLinkFieldElement;
  };

  interface HTMLAlyLinkFieldEditorElement extends Components.AlyLinkFieldEditor, HTMLStencilElement {}
  var HTMLAlyLinkFieldEditorElement: {
    prototype: HTMLAlyLinkFieldEditorElement;
    new (): HTMLAlyLinkFieldEditorElement;
  };

  interface HTMLAlyRichTextEditorElement extends Components.AlyRichTextEditor, HTMLStencilElement {}
  var HTMLAlyRichTextEditorElement: {
    prototype: HTMLAlyRichTextEditorElement;
    new (): HTMLAlyRichTextEditorElement;
  };

  interface HTMLAlyTextFieldElement extends Components.AlyTextField, HTMLStencilElement {}
  var HTMLAlyTextFieldElement: {
    prototype: HTMLAlyTextFieldElement;
    new (): HTMLAlyTextFieldElement;
  };

  interface HTMLAlyTextFieldEditorElement extends Components.AlyTextFieldEditor, HTMLStencilElement {}
  var HTMLAlyTextFieldEditorElement: {
    prototype: HTMLAlyTextFieldEditorElement;
    new (): HTMLAlyTextFieldEditorElement;
  };
  interface HTMLElementTagNameMap {
    'aly-content-field': HTMLAlyContentFieldElement;
    'aly-content-field-default': HTMLAlyContentFieldDefaultElement;
    'aly-content-field-editor': HTMLAlyContentFieldEditorElement;
    'aly-html-field': HTMLAlyHtmlFieldElement;
    'aly-html-field-editor': HTMLAlyHtmlFieldEditorElement;
    'aly-image-field': HTMLAlyImageFieldElement;
    'aly-image-field-editor': HTMLAlyImageFieldEditorElement;
    'aly-link-field': HTMLAlyLinkFieldElement;
    'aly-link-field-editor': HTMLAlyLinkFieldEditorElement;
    'aly-rich-text-editor': HTMLAlyRichTextEditorElement;
    'aly-text-field': HTMLAlyTextFieldElement;
    'aly-text-field-editor': HTMLAlyTextFieldEditorElement;
  }
}

declare namespace LocalJSX {
  interface AlyContentField extends JSXBase.HTMLAttributes<HTMLAlyContentFieldElement> {}
  interface AlyContentFieldDefault extends JSXBase.HTMLAttributes<HTMLAlyContentFieldDefaultElement> {
    'field'?: FieldData<any>;
  }
  interface AlyContentFieldEditor extends JSXBase.HTMLAttributes<HTMLAlyContentFieldEditorElement> {
    'field'?: FieldData<any>;
  }
  interface AlyHtmlField extends JSXBase.HTMLAttributes<HTMLAlyHtmlFieldElement> {
    'field'?: FieldData<any>;
  }
  interface AlyHtmlFieldEditor extends JSXBase.HTMLAttributes<HTMLAlyHtmlFieldEditorElement> {
    'field'?: FieldData<any>;
    'onEdit'?: (event: CustomEvent<any>) => void;
  }
  interface AlyImageField extends JSXBase.HTMLAttributes<HTMLAlyImageFieldElement> {
    'field'?: FieldData<ImageFieldData>;
  }
  interface AlyImageFieldEditor extends JSXBase.HTMLAttributes<HTMLAlyImageFieldEditorElement> {
    'field'?: FieldData<ImageFieldData>;
    'onEdit'?: (event: CustomEvent<any>) => void;
  }
  interface AlyLinkField extends JSXBase.HTMLAttributes<HTMLAlyLinkFieldElement> {
    'field'?: FieldData<LinkFieldData>;
  }
  interface AlyLinkFieldEditor extends JSXBase.HTMLAttributes<HTMLAlyLinkFieldEditorElement> {
    'field'?: FieldData<LinkFieldData>;
    'onEdit'?: (event: CustomEvent<any>) => void;
  }
  interface AlyRichTextEditor extends JSXBase.HTMLAttributes<HTMLAlyRichTextEditorElement> {
    'onOnActivate'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnAddUndo'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnBeforeAddUndo'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnBeforeExecCommand'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnBeforeGetContent'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnBeforePaste'?: (event: CustomEvent<EventObj<ClipboardEvent>>) => void;
    'onOnBeforeRenderUI'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnBeforeSetContent'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnBlur'?: (event: CustomEvent<EventObj<FocusEvent>>) => void;
    'onOnChange'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnClearUndos'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnClick'?: (event: CustomEvent<EventObj<MouseEvent>>) => void;
    'onOnContextMenu'?: (event: CustomEvent<EventObj<MouseEvent>>) => void;
    'onOnCopy'?: (event: CustomEvent<EventObj<ClipboardEvent>>) => void;
    'onOnCut'?: (event: CustomEvent<EventObj<ClipboardEvent>>) => void;
    'onOnDblclick'?: (event: CustomEvent<EventObj<MouseEvent>>) => void;
    'onOnDeactivate'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnDirty'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnDrag'?: (event: CustomEvent<EventObj<DragEvent>>) => void;
    'onOnDragDrop'?: (event: CustomEvent<EventObj<DragEvent>>) => void;
    'onOnDragEnd'?: (event: CustomEvent<EventObj<DragEvent>>) => void;
    'onOnDragGesture'?: (event: CustomEvent<EventObj<DragEvent>>) => void;
    'onOnDragOver'?: (event: CustomEvent<EventObj<DragEvent>>) => void;
    'onOnDrop'?: (event: CustomEvent<EventObj<DragEvent>>) => void;
    'onOnExecCommand'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnFocus'?: (event: CustomEvent<EventObj<FocusEvent>>) => void;
    'onOnFocusIn'?: (event: CustomEvent<EventObj<FocusEvent>>) => void;
    'onOnFocusOut'?: (event: CustomEvent<EventObj<FocusEvent>>) => void;
    'onOnGetContent'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnHide'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnInit'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnKeyDown'?: (event: CustomEvent<EventObj<KeyboardEvent>>) => void;
    'onOnKeyPress'?: (event: CustomEvent<EventObj<KeyboardEvent>>) => void;
    'onOnKeyUp'?: (event: CustomEvent<EventObj<KeyboardEvent>>) => void;
    'onOnLoadContent'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnMouseDown'?: (event: CustomEvent<EventObj<MouseEvent>>) => void;
    'onOnMouseEnter'?: (event: CustomEvent<EventObj<MouseEvent>>) => void;
    'onOnMouseLeave'?: (event: CustomEvent<EventObj<MouseEvent>>) => void;
    'onOnMouseMove'?: (event: CustomEvent<EventObj<MouseEvent>>) => void;
    'onOnMouseOut'?: (event: CustomEvent<EventObj<MouseEvent>>) => void;
    'onOnMouseOver'?: (event: CustomEvent<EventObj<MouseEvent>>) => void;
    'onOnMouseUp'?: (event: CustomEvent<EventObj<MouseEvent>>) => void;
    'onOnNodeChange'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnObjectResizeStart'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnObjectResized'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnObjectSelected'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnPaste'?: (event: CustomEvent<EventObj<ClipboardEvent>>) => void;
    'onOnPostProcess'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnPostRender'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnPreInit'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnPreProcess'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnProgressState'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnRedo'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnRemove'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnReset'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnSaveContent'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnSetAttrib'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnSetContent'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnShow'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnSubmit'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnUndo'?: (event: CustomEvent<EventObj<any>>) => void;
    'onOnVisualAid'?: (event: CustomEvent<EventObj<any>>) => void;
    'onValueChanged'?: (event: CustomEvent<string>) => void;
  }
  interface AlyTextField extends JSXBase.HTMLAttributes<HTMLAlyTextFieldElement> {
    'field'?: FieldData<string>;
  }
  interface AlyTextFieldEditor extends JSXBase.HTMLAttributes<HTMLAlyTextFieldEditorElement> {
    'field'?: FieldData<string>;
  }

  interface IntrinsicElements {
    'aly-content-field': AlyContentField;
    'aly-content-field-default': AlyContentFieldDefault;
    'aly-content-field-editor': AlyContentFieldEditor;
    'aly-html-field': AlyHtmlField;
    'aly-html-field-editor': AlyHtmlFieldEditor;
    'aly-image-field': AlyImageField;
    'aly-image-field-editor': AlyImageFieldEditor;
    'aly-link-field': AlyLinkField;
    'aly-link-field-editor': AlyLinkFieldEditor;
    'aly-rich-text-editor': AlyRichTextEditor;
    'aly-text-field': AlyTextField;
    'aly-text-field-editor': AlyTextFieldEditor;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


