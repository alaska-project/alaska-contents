import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSelectorControlComponent } from './file-selector-control.component';

describe('FileSelectorControlComponent', () => {
  let component: FileSelectorControlComponent;
  let fixture: ComponentFixture<FileSelectorControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSelectorControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSelectorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
