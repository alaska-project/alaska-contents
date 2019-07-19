
export interface ContentItem {
    info: ContentItemInfo;
    fields: ContentItemFields;
}

export interface ContentItemInfo {
    id: string;
    language: string;
    publishingTarget: string;
    templateId: string;
    path: string[];
    idPath: string[];
}

export interface ContentItemFields {
    [key: string]: ContentField<any>;
}

export interface ContentField<T> {
    type: string;
    value: T;
}

export interface ImageFieldData {
    id: string;
    url: string;
    alt: string;
    class: string;
}

export interface LinkFieldData {
    linkType: string;
    url: string;
    target: string;
    text: string;
}

export interface LinkedItemFieldData {
    item: ContentItem;
}

export interface LinkedItemsFieldData {
    items: ContentItem[];
}
