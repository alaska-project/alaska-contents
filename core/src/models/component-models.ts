import { ContentField } from "./content-models";

export type ContentMode = 'Default' | 'Editing';

export interface HTMLFieldElement {
    setField(value: ContentField<any>): void;
}