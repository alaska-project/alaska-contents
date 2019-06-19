/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ContentField,
  ImageFieldData,
  LinkFieldData,
} from './models/content-models';
import {
  ContentMode,
} from './models/component-models';
import {
  EventObj,
} from './components/editors/rich-text-editor/rich-text-editor-models';
import {
  SelectOption,
} from './components/controls/select/select.model';

export namespace Components {
  interface AlaskaHtmlField {
    'field': ContentField<any>;
    'setField': (field: ContentField<string>) => Promise<void>;
    'setMode': (mode: ContentMode) => Promise<void>;
  }
  interface AlaskaHtmlFieldDefault {
    'field': ContentField<string>;
  }
  interface AlaskaHtmlFieldEditor {
    'field': ContentField<string>;
    'update': () => Promise<void>;
  }
  interface AlaskaImageField {
    'field': ContentField<ImageFieldData>;
    'setField': (field: ContentField<ImageFieldData>) => Promise<void>;
    'setMode': (mode: ContentMode) => Promise<void>;
  }
  interface AlaskaImageFieldDefault {
    'field': ContentField<ImageFieldData>;
  }
  interface AlaskaImageFieldEditor {
    'field': ContentField<ImageFieldData>;
  }
  interface AlaskaLinkEditor {
    'linkData': LinkFieldData;
  }
  interface AlaskaLinkField {
    'field': ContentField<LinkFieldData>;
    'setField': (field: ContentField<LinkFieldData>) => Promise<void>;
    'setMode': (mode: ContentMode) => Promise<void>;
  }
  interface AlaskaLinkFieldDefault {
    'field': ContentField<LinkFieldData>;
  }
  interface AlaskaLinkFieldEditor {
    'field': ContentField<LinkFieldData>;
  }
  interface AlaskaModal {
    'presentModal': () => Promise<void>;
  }
  interface AlaskaRichTextEditor {
    'contentCss': string;
    'fontFormats': string;
    'height': string;
    'initialize': (settings: any, value: string, callback?: () => void) => Promise<void>;
    'inline': boolean;
    'mobileTheme': string;
    'plugins': string;
    'resize': boolean;
    'setValue': (value: string) => Promise<void>;
    'skin': string;
    'toolbar': string;
  }
  interface AlaskaSelect {
    'options': SelectOption[];
  }
  interface AlaskaTextField {
    'field': ContentField<string>;
    'setField': (field: ContentField<string>) => Promise<void>;
    'setMode': (mode: ContentMode) => Promise<void>;
  }
  interface AlaskaTextFieldDefault {
    'field': ContentField<string>;
  }
  interface AlaskaTextFieldEditor {
    'field': ContentField<string>;
  }
}

declare global {

  // Adding a global JSX for backcompatibility with legacy dependencies
  export namespace JSX {
    export interface Element {}
  }


  interface HTMLAlaskaHtmlFieldElement extends Components.AlaskaHtmlField, HTMLStencilElement {}
  var HTMLAlaskaHtmlFieldElement: {
    prototype: HTMLAlaskaHtmlFieldElement;
    new (): HTMLAlaskaHtmlFieldElement;
  };

  interface HTMLAlaskaHtmlFieldDefaultElement extends Components.AlaskaHtmlFieldDefault, HTMLStencilElement {}
  var HTMLAlaskaHtmlFieldDefaultElement: {
    prototype: HTMLAlaskaHtmlFieldDefaultElement;
    new (): HTMLAlaskaHtmlFieldDefaultElement;
  };

  interface HTMLAlaskaHtmlFieldEditorElement extends Components.AlaskaHtmlFieldEditor, HTMLStencilElement {}
  var HTMLAlaskaHtmlFieldEditorElement: {
    prototype: HTMLAlaskaHtmlFieldEditorElement;
    new (): HTMLAlaskaHtmlFieldEditorElement;
  };

  interface HTMLAlaskaImageFieldElement extends Components.AlaskaImageField, HTMLStencilElement {}
  var HTMLAlaskaImageFieldElement: {
    prototype: HTMLAlaskaImageFieldElement;
    new (): HTMLAlaskaImageFieldElement;
  };

  interface HTMLAlaskaImageFieldDefaultElement extends Components.AlaskaImageFieldDefault, HTMLStencilElement {}
  var HTMLAlaskaImageFieldDefaultElement: {
    prototype: HTMLAlaskaImageFieldDefaultElement;
    new (): HTMLAlaskaImageFieldDefaultElement;
  };

  interface HTMLAlaskaImageFieldEditorElement extends Components.AlaskaImageFieldEditor, HTMLStencilElement {}
  var HTMLAlaskaImageFieldEditorElement: {
    prototype: HTMLAlaskaImageFieldEditorElement;
    new (): HTMLAlaskaImageFieldEditorElement;
  };

  interface HTMLAlaskaLinkEditorElement extends Components.AlaskaLinkEditor, HTMLStencilElement {}
  var HTMLAlaskaLinkEditorElement: {
    prototype: HTMLAlaskaLinkEditorElement;
    new (): HTMLAlaskaLinkEditorElement;
  };

  interface HTMLAlaskaLinkFieldElement extends Components.AlaskaLinkField, HTMLStencilElement {}
  var HTMLAlaskaLinkFieldElement: {
    prototype: HTMLAlaskaLinkFieldElement;
    new (): HTMLAlaskaLinkFieldElement;
  };

  interface HTMLAlaskaLinkFieldDefaultElement extends Components.AlaskaLinkFieldDefault, HTMLStencilElement {}
  var HTMLAlaskaLinkFieldDefaultElement: {
    prototype: HTMLAlaskaLinkFieldDefaultElement;
    new (): HTMLAlaskaLinkFieldDefaultElement;
  };

  interface HTMLAlaskaLinkFieldEditorElement extends Components.AlaskaLinkFieldEditor, HTMLStencilElement {}
  var HTMLAlaskaLinkFieldEditorElement: {
    prototype: HTMLAlaskaLinkFieldEditorElement;
    new (): HTMLAlaskaLinkFieldEditorElement;
  };

  interface HTMLAlaskaModalElement extends Components.AlaskaModal, HTMLStencilElement {}
  var HTMLAlaskaModalElement: {
    prototype: HTMLAlaskaModalElement;
    new (): HTMLAlaskaModalElement;
  };

  interface HTMLAlaskaRichTextEditorElement extends Components.AlaskaRichTextEditor, HTMLStencilElement {}
  var HTMLAlaskaRichTextEditorElement: {
    prototype: HTMLAlaskaRichTextEditorElement;
    new (): HTMLAlaskaRichTextEditorElement;
  };

  interface HTMLAlaskaSelectElement extends Components.AlaskaSelect, HTMLStencilElement {}
  var HTMLAlaskaSelectElement: {
    prototype: HTMLAlaskaSelectElement;
    new (): HTMLAlaskaSelectElement;
  };

  interface HTMLAlaskaTextFieldElement extends Components.AlaskaTextField, HTMLStencilElement {}
  var HTMLAlaskaTextFieldElement: {
    prototype: HTMLAlaskaTextFieldElement;
    new (): HTMLAlaskaTextFieldElement;
  };

  interface HTMLAlaskaTextFieldDefaultElement extends Components.AlaskaTextFieldDefault, HTMLStencilElement {}
  var HTMLAlaskaTextFieldDefaultElement: {
    prototype: HTMLAlaskaTextFieldDefaultElement;
    new (): HTMLAlaskaTextFieldDefaultElement;
  };

  interface HTMLAlaskaTextFieldEditorElement extends Components.AlaskaTextFieldEditor, HTMLStencilElement {}
  var HTMLAlaskaTextFieldEditorElement: {
    prototype: HTMLAlaskaTextFieldEditorElement;
    new (): HTMLAlaskaTextFieldEditorElement;
  };
  interface HTMLElementTagNameMap {
    'alaska-html-field': HTMLAlaskaHtmlFieldElement;
    'alaska-html-field-default': HTMLAlaskaHtmlFieldDefaultElement;
    'alaska-html-field-editor': HTMLAlaskaHtmlFieldEditorElement;
    'alaska-image-field': HTMLAlaskaImageFieldElement;
    'alaska-image-field-default': HTMLAlaskaImageFieldDefaultElement;
    'alaska-image-field-editor': HTMLAlaskaImageFieldEditorElement;
    'alaska-link-editor': HTMLAlaskaLinkEditorElement;
    'alaska-link-field': HTMLAlaskaLinkFieldElement;
    'alaska-link-field-default': HTMLAlaskaLinkFieldDefaultElement;
    'alaska-link-field-editor': HTMLAlaskaLinkFieldEditorElement;
    'alaska-modal': HTMLAlaskaModalElement;
    'alaska-rich-text-editor': HTMLAlaskaRichTextEditorElement;
    'alaska-select': HTMLAlaskaSelectElement;
    'alaska-text-field': HTMLAlaskaTextFieldElement;
    'alaska-text-field-default': HTMLAlaskaTextFieldDefaultElement;
    'alaska-text-field-editor': HTMLAlaskaTextFieldEditorElement;
  }
}

declare namespace LocalJSX {
  interface AlaskaHtmlField extends JSXBase.HTMLAttributes<HTMLAlaskaHtmlFieldElement> {
    'field'?: ContentField<any>;
    'onEdit'?: (event: CustomEvent<any>) => void;
  }
  interface AlaskaHtmlFieldDefault extends JSXBase.HTMLAttributes<HTMLAlaskaHtmlFieldDefaultElement> {
    'field'?: ContentField<string>;
  }
  interface AlaskaHtmlFieldEditor extends JSXBase.HTMLAttributes<HTMLAlaskaHtmlFieldEditorElement> {
    'field'?: ContentField<string>;
    'onEdit'?: (event: CustomEvent<any>) => void;
  }
  interface AlaskaImageField extends JSXBase.HTMLAttributes<HTMLAlaskaImageFieldElement> {
    'field'?: ContentField<ImageFieldData>;
    'onEdit'?: (event: CustomEvent<any>) => void;
  }
  interface AlaskaImageFieldDefault extends JSXBase.HTMLAttributes<HTMLAlaskaImageFieldDefaultElement> {
    'field'?: ContentField<ImageFieldData>;
  }
  interface AlaskaImageFieldEditor extends JSXBase.HTMLAttributes<HTMLAlaskaImageFieldEditorElement> {
    'field'?: ContentField<ImageFieldData>;
    'onEdit'?: (event: CustomEvent<any>) => void;
  }
  interface AlaskaLinkEditor extends JSXBase.HTMLAttributes<HTMLAlaskaLinkEditorElement> {
    'linkData'?: LinkFieldData;
  }
  interface AlaskaLinkField extends JSXBase.HTMLAttributes<HTMLAlaskaLinkFieldElement> {
    'field'?: ContentField<LinkFieldData>;
    'onEdit'?: (event: CustomEvent<any>) => void;
  }
  interface AlaskaLinkFieldDefault extends JSXBase.HTMLAttributes<HTMLAlaskaLinkFieldDefaultElement> {
    'field'?: ContentField<LinkFieldData>;
  }
  interface AlaskaLinkFieldEditor extends JSXBase.HTMLAttributes<HTMLAlaskaLinkFieldEditorElement> {
    'field'?: ContentField<LinkFieldData>;
    'onEdit'?: (event: CustomEvent<any>) => void;
  }
  interface AlaskaModal extends JSXBase.HTMLAttributes<HTMLAlaskaModalElement> {}
  interface AlaskaRichTextEditor extends JSXBase.HTMLAttributes<HTMLAlaskaRichTextEditorElement> {
    'contentCss'?: string;
    'fontFormats'?: string;
    'height'?: string;
    'inline'?: boolean;
    'mobileTheme'?: string;
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
    'plugins'?: string;
    'resize'?: boolean;
    'skin'?: string;
    'toolbar'?: string;
  }
  interface AlaskaSelect extends JSXBase.HTMLAttributes<HTMLAlaskaSelectElement> {
    'options'?: SelectOption[];
  }
  interface AlaskaTextField extends JSXBase.HTMLAttributes<HTMLAlaskaTextFieldElement> {
    'field'?: ContentField<string>;
  }
  interface AlaskaTextFieldDefault extends JSXBase.HTMLAttributes<HTMLAlaskaTextFieldDefaultElement> {
    'field'?: ContentField<string>;
  }
  interface AlaskaTextFieldEditor extends JSXBase.HTMLAttributes<HTMLAlaskaTextFieldEditorElement> {
    'field'?: ContentField<string>;
  }

  interface IntrinsicElements {
    'alaska-html-field': AlaskaHtmlField;
    'alaska-html-field-default': AlaskaHtmlFieldDefault;
    'alaska-html-field-editor': AlaskaHtmlFieldEditor;
    'alaska-image-field': AlaskaImageField;
    'alaska-image-field-default': AlaskaImageFieldDefault;
    'alaska-image-field-editor': AlaskaImageFieldEditor;
    'alaska-link-editor': AlaskaLinkEditor;
    'alaska-link-field': AlaskaLinkField;
    'alaska-link-field-default': AlaskaLinkFieldDefault;
    'alaska-link-field-editor': AlaskaLinkFieldEditor;
    'alaska-modal': AlaskaModal;
    'alaska-rich-text-editor': AlaskaRichTextEditor;
    'alaska-select': AlaskaSelect;
    'alaska-text-field': AlaskaTextField;
    'alaska-text-field-default': AlaskaTextFieldDefault;
    'alaska-text-field-editor': AlaskaTextFieldEditor;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


