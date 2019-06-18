# aly-link-field-editor



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                          | Default     |
| -------- | --------- | ----------- | ----------------------------- | ----------- |
| `field`  | --        |             | `ContentField<LinkFieldData>` | `undefined` |


## Events

| Event  | Description | Type               |
| ------ | ----------- | ------------------ |
| `edit` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [alaska-link-field](..\link-field)

### Depends on

- [alaska-link-editor](..\..\editors\link-editor)

### Graph
```mermaid
graph TD;
  alaska-link-field-editor --> alaska-link-editor
  alaska-link-editor --> alaska-select
  alaska-link-field --> alaska-link-field-editor
  style alaska-link-field-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
