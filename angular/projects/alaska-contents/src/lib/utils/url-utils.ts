import { validEvents } from '@alaska-project/contents-core/dist/types/components/editors/rich-text-editor/rich-text-editor-models';

export function formatUrl(endpoint: string, path: string, parameters?: any) {
    let url = `${trimEnd(endpoint, '/')}/${trimStart(path, '/')}`;
    if (parameters) {
        url += '?';
        url += Object.keys(parameters).map(x => `${x}=${encodeURIComponent(parameters[x])}`).join('&');
    }
    return url;
}

function trimEnd(value: string, text: string) {
    return value.endsWith(text) ? 
        value.substring(0, value.length - text.length) : 
        value;
}

function trimStart(value: string, text: string) {
    return value.startsWith(text) ?
        value.substring(text.length) :
        value;
}