# aly-link-field



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                          | Default     |
| -------- | --------- | ----------- | ----------------------------- | ----------- |
| `field`  | --        |             | `ContentField<LinkFieldData>` | `undefined` |


## Methods

### `setField(field: ContentField<LinkFieldData>) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setMode(mode: ContentMode) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [alaska-link-field-default](..\link-field-default)
- [alaska-link-field-editor](..\link-field-editor)

### Graph
```mermaid
graph TD;
  alaska-link-field --> alaska-link-field-default
  alaska-link-field --> alaska-link-field-editor
  alaska-link-field-editor --> alaska-link-editor
  alaska-link-editor --> alaska-select
  style alaska-link-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
