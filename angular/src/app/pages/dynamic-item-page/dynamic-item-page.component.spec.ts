import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicItemPageComponent } from './dynamic-item-page.component';

describe('DynamicItemPageComponent', () => {
  let component: DynamicItemPageComponent;
  let fixture: ComponentFixture<DynamicItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
