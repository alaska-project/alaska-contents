import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFieldDefaultComponent } from './content-field-default.component';

describe('ContentFieldDefaultComponent', () => {
  let component: ContentFieldDefaultComponent;
  let fixture: ComponentFixture<ContentFieldDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentFieldDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFieldDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
