import { ContentItem } from "./content-models";

export type ContentsSearchDepth = 'Item' | 'Children' | 'Descendants';

export interface ContentsSearchRequest {
    id: string;
    depth: string;
    publishingTarget: string;
    language: string;
}

export interface ContentSearchResult {
    item: ContentItemResult;
}

export interface ContentItemResult {
    value: ContentItem;
    children: ContentItemResult[];
}

