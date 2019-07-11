import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscaladeLoaderComponent } from './escalade-loader.component';

describe('EscaladeLoaderComponent', () => {
  let component: EscaladeLoaderComponent;
  let fixture: ComponentFixture<EscaladeLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscaladeLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscaladeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
