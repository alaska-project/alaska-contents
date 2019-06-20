import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicItemComponent } from './dynamic-item.component';

describe('DynamicItemComponent', () => {
  let component: DynamicItemComponent;
  let fixture: ComponentFixture<DynamicItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
