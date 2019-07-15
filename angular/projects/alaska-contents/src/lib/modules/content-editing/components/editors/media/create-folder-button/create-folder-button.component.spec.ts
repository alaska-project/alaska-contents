import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFolderButtonComponent } from './create-folder-button.component';

describe('CreateFolderButtonComponent', () => {
  let component: CreateFolderButtonComponent;
  let fixture: ComponentFixture<CreateFolderButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFolderButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFolderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
