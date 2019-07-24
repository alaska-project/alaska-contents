# aly-link-field



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                          | Default     |
| -------- | --------- | ----------- | ----------------------------- | ----------- |
| `field`  | --        |             | `ContentField<LinkFieldData>` | `undefined` |


## Events

| Event  | Description | Type               |
| ------ | ----------- | ------------------ |
| `edit` |             | `CustomEvent<any>` |


## Methods

### `refresh() => Promise<void>`



#### Returns

Type: `Promise<void>`



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
  style alaska-link-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
