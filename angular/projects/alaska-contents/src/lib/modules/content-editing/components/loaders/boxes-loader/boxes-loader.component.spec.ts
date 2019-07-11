import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesLoaderComponent } from './boxes-loader.component';

describe('BoxesLoaderComponent', () => {
  let component: BoxesLoaderComponent;
  let fixture: ComponentFixture<BoxesLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxesLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxesLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
