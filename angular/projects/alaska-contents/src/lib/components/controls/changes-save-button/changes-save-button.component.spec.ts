import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesSaveButtonComponent } from './changes-save-button.component';

describe('ChangesSaveButtonComponent', () => {
  let component: ChangesSaveButtonComponent;
  let fixture: ComponentFixture<ChangesSaveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesSaveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesSaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
