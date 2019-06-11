# aly-rich-text-editor



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type      | Default                                                                                                                                                                                                                                                                                           |
| ------------- | -------------- | ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentCss`  | `content-css`  |             | `string`  | `''`                                                                                                                                                                                                                                                                                              |
| `fontFormats` | `font-formats` |             | `string`  | `''`                                                                                                                                                                                                                                                                                              |
| `height`      | `height`       |             | `string`  | `'100%'`                                                                                                                                                                                                                                                                                          |
| `inline`      | `inline`       |             | `boolean` | `false`                                                                                                                                                                                                                                                                                           |
| `mobileTheme` | `mobile-theme` |             | `string`  | `'silver'`                                                                                                                                                                                                                                                                                        |
| `plugins`     | `plugins`      |             | `string`  | `'code preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help'`                                              |
| `resize`      | `resize`       |             | `boolean` | `false`                                                                                                                                                                                                                                                                                           |
| `skin`        | `skin`         |             | `string`  | `'oxide'`                                                                                                                                                                                                                                                                                         |
| `toolbar`     | `toolbar`      |             | `string`  | `'undo redo \| formatselect \| fontsizeselect \| fontselect \| bold italic strikethrough forecolor backcolor permanentpen formatpainter \| link image media pageembed \| alignleft aligncenter alignright alignjustify  \| numlist bullist outdent indent \| removeformat \| addcomment \| code'` |


## Events

| Event                 | Description | Type                                    |
| --------------------- | ----------- | --------------------------------------- |
| `onActivate`          |             | `CustomEvent<EventObj<any>>`            |
| `onAddUndo`           |             | `CustomEvent<EventObj<any>>`            |
| `onBeforeAddUndo`     |             | `CustomEvent<EventObj<any>>`            |
| `onBeforeExecCommand` |             | `CustomEvent<EventObj<any>>`            |
| `onBeforeGetContent`  |             | `CustomEvent<EventObj<any>>`            |
| `onBeforePaste`       |             | `CustomEvent<EventObj<ClipboardEvent>>` |
| `onBeforeRenderUI`    |             | `CustomEvent<EventObj<any>>`            |
| `onBeforeSetContent`  |             | `CustomEvent<EventObj<any>>`            |
| `onBlur`              |             | `CustomEvent<EventObj<FocusEvent>>`     |
| `onChange`            |             | `CustomEvent<EventObj<any>>`            |
| `onClearUndos`        |             | `CustomEvent<EventObj<any>>`            |
| `onClick`             |             | `CustomEvent<EventObj<MouseEvent>>`     |
| `onContextMenu`       |             | `CustomEvent<EventObj<MouseEvent>>`     |
| `onCopy`              |             | `CustomEvent<EventObj<ClipboardEvent>>` |
| `onCut`               |             | `CustomEvent<EventObj<ClipboardEvent>>` |
| `onDblclick`          |             | `CustomEvent<EventObj<MouseEvent>>`     |
| `onDeactivate`        |             | `CustomEvent<EventObj<any>>`            |
| `onDirty`             |             | `CustomEvent<EventObj<any>>`            |
| `onDrag`              |             | `CustomEvent<EventObj<DragEvent>>`      |
| `onDragDrop`          |             | `CustomEvent<EventObj<DragEvent>>`      |
| `onDragEnd`           |             | `CustomEvent<EventObj<DragEvent>>`      |
| `onDragGesture`       |             | `CustomEvent<EventObj<DragEvent>>`      |
| `onDragOver`          |             | `CustomEvent<EventObj<DragEvent>>`      |
| `onDrop`              |             | `CustomEvent<EventObj<DragEvent>>`      |
| `onExecCommand`       |             | `CustomEvent<EventObj<any>>`            |
| `onFocus`             |             | `CustomEvent<EventObj<FocusEvent>>`     |
| `onFocusIn`           |             | `CustomEvent<EventObj<FocusEvent>>`     |
| `onFocusOut`          |             | `CustomEvent<EventObj<FocusEvent>>`     |
| `onGetContent`        |             | `CustomEvent<EventObj<any>>`            |
| `onHide`              |             | `CustomEvent<EventObj<any>>`            |
| `onInit`              |             | `CustomEvent<EventObj<any>>`            |
| `onKeyDown`           |             | `CustomEvent<EventObj<KeyboardEvent>>`  |
| `onKeyPress`          |             | `CustomEvent<EventObj<KeyboardEvent>>`  |
| `onKeyUp`             |             | `CustomEvent<EventObj<KeyboardEvent>>`  |
| `onLoadContent`       |             | `CustomEvent<EventObj<any>>`            |
| `onMouseDown`         |             | `CustomEvent<EventObj<MouseEvent>>`     |
| `onMouseEnter`        |             | `CustomEvent<EventObj<MouseEvent>>`     |
| `onMouseLeave`        |             | `CustomEvent<EventObj<MouseEvent>>`     |
| `onMouseMove`         |             | `CustomEvent<EventObj<MouseEvent>>`     |
| `onMouseOut`          |             | `CustomEvent<EventObj<MouseEvent>>`     |
| `onMouseOver`         |             | `CustomEvent<EventObj<MouseEvent>>`     |
| `onMouseUp`           |             | `CustomEvent<EventObj<MouseEvent>>`     |
| `onNodeChange`        |             | `CustomEvent<EventObj<any>>`            |
| `onObjectResized`     |             | `CustomEvent<EventObj<any>>`            |
| `onObjectResizeStart` |             | `CustomEvent<EventObj<any>>`            |
| `onObjectSelected`    |             | `CustomEvent<EventObj<any>>`            |
| `onPaste`             |             | `CustomEvent<EventObj<ClipboardEvent>>` |
| `onPostProcess`       |             | `CustomEvent<EventObj<any>>`            |
| `onPostRender`        |             | `CustomEvent<EventObj<any>>`            |
| `onPreInit`           |             | `CustomEvent<EventObj<any>>`            |
| `onPreProcess`        |             | `CustomEvent<EventObj<any>>`            |
| `onProgressState`     |             | `CustomEvent<EventObj<any>>`            |
| `onRedo`              |             | `CustomEvent<EventObj<any>>`            |
| `onRemove`            |             | `CustomEvent<EventObj<any>>`            |
| `onReset`             |             | `CustomEvent<EventObj<any>>`            |
| `onSaveContent`       |             | `CustomEvent<EventObj<any>>`            |
| `onSetAttrib`         |             | `CustomEvent<EventObj<any>>`            |
| `onSetContent`        |             | `CustomEvent<EventObj<any>>`            |
| `onShow`              |             | `CustomEvent<EventObj<any>>`            |
| `onSubmit`            |             | `CustomEvent<EventObj<any>>`            |
| `onUndo`              |             | `CustomEvent<EventObj<any>>`            |
| `onVisualAid`         |             | `CustomEvent<EventObj<any>>`            |
| `valueChanged`        |             | `CustomEvent<string>`                   |


## Methods

### `initialize(settings: TinyMceSettings, value: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
