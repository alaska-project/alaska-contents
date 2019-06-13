
export interface FieldsMap {
    [key: string]: FieldDefinition;
}

export interface FieldDefinition {
    fieldType: string;
    defaultFieldComponentType?: any;
    editingFieldComponentType?: any;
}
