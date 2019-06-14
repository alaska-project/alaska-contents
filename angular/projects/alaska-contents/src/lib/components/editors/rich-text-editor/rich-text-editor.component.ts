import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, EventEmitter, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'aly-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RichTextEditorComponent),
    multi: true
  }]
})
export class RichTextEditorComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @ViewChild('editor', {static: false}) 
  editor: ElementRef<HTMLAlaskaRichTextEditorElement>;

  @Input()
  height: string;
  
  @Input()
  initialValue: string | undefined;

  @Output()
  valueChanged: EventEmitter<string>;
  
  private isInitialized = false;
  private onTouchedCallback = () => { };
  private onChangeCallback = (x: any) => { };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.editor.nativeElement.initialize({
      baseURL: '',
      options: {}
    }, 
    this.initialValue, 
    () => this.isInitialized = true);
  }

  writeValue(value: string | null): void {
    this.initialValue = value || this.initialValue;
    value = value || '';

    if (this.editor && this.isInitialized && typeof value === 'string') {
      this.editor.nativeElement.setValue(value);
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
  }

  emitValue(event: any) {
    console.log('e', event);
  }
}
