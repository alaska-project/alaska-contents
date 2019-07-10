import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingModeSwitherComponent } from './editing-mode-swither.component';

describe('EditingModeSwitherComponent', () => {
  let component: EditingModeSwitherComponent;
  let fixture: ComponentFixture<EditingModeSwitherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingModeSwitherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingModeSwitherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
