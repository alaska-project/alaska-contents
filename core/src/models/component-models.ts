import { FieldData } from "./content-models";

export type ContentMode = 'Default' | 'Editing';

export interface HTMLFieldElement {
    setField(value: FieldData<any>): void;
}