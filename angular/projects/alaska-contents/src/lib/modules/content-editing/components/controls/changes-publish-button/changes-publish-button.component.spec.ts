import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesPublishButtonComponent } from './changes-publish-button.component';

describe('ChangesPublishButtonComponent', () => {
  let component: ChangesPublishButtonComponent;
  let fixture: ComponentFixture<ChangesPublishButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesPublishButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesPublishButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
