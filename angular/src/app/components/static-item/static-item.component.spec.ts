import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticItemComponent } from './static-item.component';

describe('StaticItemComponent', () => {
  let component: StaticItemComponent;
  let fixture: ComponentFixture<StaticItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
