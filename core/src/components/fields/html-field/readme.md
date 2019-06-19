# aly-html-field



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                | Default     |
| -------- | --------- | ----------- | ------------------- | ----------- |
| `field`  | --        |             | `ContentField<any>` | `undefined` |


## Events

| Event  | Description | Type               |
| ------ | ----------- | ------------------ |
| `edit` |             | `CustomEvent<any>` |


## Methods

### `setField(field: ContentField<string>) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setMode(mode: ContentMode) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [alaska-html-field-default](..\html-field-default)
- [alaska-html-field-editor](..\html-field-editor)

### Graph
```mermaid
graph TD;
  alaska-html-field --> alaska-html-field-default
  alaska-html-field --> alaska-html-field-editor
  style alaska-html-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
