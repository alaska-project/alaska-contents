import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFieldComponent } from './media-field.component';

describe('MediaFieldComponent', () => {
  let component: MediaFieldComponent;
  let fixture: ComponentFixture<MediaFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
