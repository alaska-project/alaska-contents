
export interface ContentItem {

}

export interface ContentField<T> {
    type: string;
    value: T;
}

export interface ImageFieldData {
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
