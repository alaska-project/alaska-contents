import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImageFieldComponent } from './background-image-field.component';

describe('BackgroundImageFieldComponent', () => {
  let component: BackgroundImageFieldComponent;
  let fixture: ComponentFixture<BackgroundImageFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundImageFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundImageFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
