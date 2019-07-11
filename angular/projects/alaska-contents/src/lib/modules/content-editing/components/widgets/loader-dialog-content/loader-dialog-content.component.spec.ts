import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderDialogContentComponent } from './loader-dialog-content.component';

describe('LoaderDialogContentComponent', () => {
  let component: LoaderDialogContentComponent;
  let fixture: ComponentFixture<LoaderDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
