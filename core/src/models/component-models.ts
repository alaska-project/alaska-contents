import { ContentField } from "./content-models";

export type ContentMode = 'Default' | 'Editing';

export interface HTMLFieldElement {
    setField(value: FieldData<any>): void;
}

export interface FieldData<T> {
    data: ContentField<T>;
    hostElement: HTMLElement;
}