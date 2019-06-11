import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlaskaContentsComponent } from './alaska-contents.component';

describe('AlaskaContentsComponent', () => {
  let component: AlaskaContentsComponent;
  let fixture: ComponentFixture<AlaskaContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlaskaContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlaskaContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
