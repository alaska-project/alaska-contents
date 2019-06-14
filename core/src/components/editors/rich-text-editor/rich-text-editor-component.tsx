import { Component, Method, Event, EventEmitter, h, Prop } from '@stencil/core';
import { randomId } from '../../../utils/utils';
import { TinyMceSettings } from '../../../models/tinymce-models';

@Component({
    tag: 'alaska-rich-text-editor',
    styleUrl: 'rich-text-editor-component.scss',
    shadow: false
})
export class RichTextEditorComponent {

    private editorId = randomId();
    private editor: any;
    private value: string;

    @Event() onBeforePaste: EventEmitter<EventObj<ClipboardEvent>>;
    @Event() onBlur: EventEmitter<EventObj<FocusEvent>>;
    @Event() onClick: EventEmitter<EventObj<MouseEvent>>;
    @Event() onContextMenu: EventEmitter<EventObj<MouseEvent>>;
    @Event() onCopy: EventEmitter<EventObj<ClipboardEvent>>;
    @Event() onCut: EventEmitter<EventObj<ClipboardEvent>>;
    @Event() onDblclick: EventEmitter<EventObj<MouseEvent>>;
    @Event() onDrag: EventEmitter<EventObj<DragEvent>>;
    @Event() onDragDrop: EventEmitter<EventObj<DragEvent>>;
    @Event() onDragEnd: EventEmitter<EventObj<DragEvent>>;
    @Event() onDragGesture: EventEmitter<EventObj<DragEvent>>;
    @Event() onDragOver: EventEmitter<EventObj<DragEvent>>;
    @Event() onDrop: EventEmitter<EventObj<DragEvent>>;
    @Event() onFocus: EventEmitter<EventObj<FocusEvent>>;
    @Event() onFocusIn: EventEmitter<EventObj<FocusEvent>>;
    @Event() onFocusOut: EventEmitter<EventObj<FocusEvent>>;
    @Event() onKeyDown: EventEmitter<EventObj<KeyboardEvent>>;
    @Event() onKeyPress: EventEmitter<EventObj<KeyboardEvent>>;
    @Event() onKeyUp: EventEmitter<EventObj<KeyboardEvent>>;
    @Event() onMouseDown: EventEmitter<EventObj<MouseEvent>>;
    @Event() onMouseEnter: EventEmitter<EventObj<MouseEvent>>;
    @Event() onMouseLeave: EventEmitter<EventObj<MouseEvent>>;
    @Event() onMouseMove: EventEmitter<EventObj<MouseEvent>>;
    @Event() onMouseOut: EventEmitter<EventObj<MouseEvent>>;
    @Event() onMouseOver: EventEmitter<EventObj<MouseEvent>>;
    @Event() onMouseUp: EventEmitter<EventObj<MouseEvent>>;
    @Event() onPaste: EventEmitter<EventObj<ClipboardEvent>>;
    @Event() onActivate: EventEmitter<EventObj<any>>;
    @Event() onAddUndo: EventEmitter<EventObj<any>>;
    @Event() onBeforeAddUndo: EventEmitter<EventObj<any>>;
    @Event() onBeforeExecCommand: EventEmitter<EventObj<any>>;
    @Event() onBeforeGetContent: EventEmitter<EventObj<any>>;
    @Event() onBeforeRenderUI: EventEmitter<EventObj<any>>;
    @Event() onBeforeSetContent: EventEmitter<EventObj<any>>;
    @Event() onChange: EventEmitter<EventObj<any>>;
    @Event() onClearUndos: EventEmitter<EventObj<any>>;
    @Event() onDeactivate: EventEmitter<EventObj<any>>;
    @Event() onDirty: EventEmitter<EventObj<any>>;
    @Event() onExecCommand: EventEmitter<EventObj<any>>;
    @Event() onGetContent: EventEmitter<EventObj<any>>;
    @Event() onHide: EventEmitter<EventObj<any>>;
    @Event() onInit: EventEmitter<EventObj<any>>;
    @Event() onLoadContent: EventEmitter<EventObj<any>>;
    @Event() onNodeChange: EventEmitter<EventObj<any>>;
    @Event() onPostProcess: EventEmitter<EventObj<any>>;
    @Event() onPostRender: EventEmitter<EventObj<any>>;
    @Event() onPreInit: EventEmitter<EventObj<any>>;
    @Event() onPreProcess: EventEmitter<EventObj<any>>;
    @Event() onProgressState: EventEmitter<EventObj<any>>;
    @Event() onRedo: EventEmitter<EventObj<any>>;
    @Event() onRemove: EventEmitter<EventObj<any>>;
    @Event() onReset: EventEmitter<EventObj<any>>;
    @Event() onSaveContent: EventEmitter<EventObj<any>>;
    @Event() onSetAttrib: EventEmitter<EventObj<any>>;
    @Event() onObjectResizeStart: EventEmitter<EventObj<any>>;
    @Event() onObjectResized: EventEmitter<EventObj<any>>;
    @Event() onObjectSelected: EventEmitter<EventObj<any>>;
    @Event() onSetContent: EventEmitter<EventObj<any>>;
    @Event() onShow: EventEmitter<EventObj<any>>;
    @Event() onSubmit: EventEmitter<EventObj<any>>;
    @Event() onUndo: EventEmitter<EventObj<any>>;
    @Event() onVisualAid: EventEmitter<EventObj<any>>;

    @Event() valueChanged: EventEmitter<string>;

    @Prop() plugins = 'code preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help';
    @Prop() toolbar = 'undo redo | formatselect | fontsizeselect | fontselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment | code';
    @Prop() inline = false;
    @Prop() resize = false;
    @Prop() skin = 'oxide';
    @Prop() mobileTheme = 'silver';
    @Prop() height = '';
    @Prop() contentCss = '';
    @Prop() fontFormats = '';

    @Method()
    async initialize(settings: TinyMceSettings, value: string, callback?: () => void) {
        this.value = value;
        const tiny = this.getTinymce();
        if (settings.baseURL) {
            tiny.baseURL = settings.baseURL;
        }
        const options = this.createInitOptions(settings, (editor) => this.setupEditor(editor, callback));
        tiny.init(options);
    }

    @Method()
    async setValue(value: string) {
        this.value = value;
    }

    private createInitOptions(settings: TinyMceSettings, setup?: (editor: any) => void) {
        return Object.assign({},
            { selector: `#${this.editorId}` },
            { plugins: this.plugins },
            { toolbar: this.toolbar },
            { inline: this.inline },
            { resize: this.resize },
            { skin: this.skin },
            { mobile: { theme: this.mobileTheme } },
            { height: this.height },
            { content_css: this.contentCss },
            { font_formats: this.fontFormats },
            settings,
            { setup: setup },
        );
    }

    private setupEditor(editor: any, callback?: () => void) {
        this.editor = editor;
        console.log('Editor initialized', this.editor);
        editor.on('init', (e: Event) => {
            this.initEditor(e, editor);
            if (callback) {
                callback();
            }
        });
    }

    private initEditor(initEvent: Event, editor: any) {
        editor.setContent(this.value);
        editor.on('change keyup undo redo', () => {
            this.valueChanged.emit(editor.getContent());
        });
        editor.on('setcontent', (content: string) => {
            this.valueChanged.emit(content);
        });
        console.log('Init event', initEvent);
        // this.bindHandlers(editor, initEvent);
    }

    // bindHandlers(editor: any, initEvent: Event): void {
    //     validEvents.forEach((eventName) => {
    //         const eventEmitter: EventEmitter<any> = this[eventName];
    //         if (eventEmitter) {
    //             if (eventName === 'onInit') {
    //                 eventEmitter.emit({ event: initEvent, editor })
    //             } else {
    //                 editor.on(eventName.toString().substring(2), () => (event: any) => eventEmitter.emit({ event, editor }));
    //             }
    //         }
    //     });
    // }

    render() {
        return (
            <div class="tinymce-editor-container">
                <textarea id={this.editorId}></textarea>
            </div>);
    }

    private getTinymce() {
        const w = typeof window !== 'undefined' ? (window as any) : undefined;
        return w && w.tinyMCE ? w.tinyMCE : null;
    }
}


export const validEvents: (keyof RichTextEditorComponent)[] = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];

export interface EventObj<T> {
    event: T;
    editor: any;
}