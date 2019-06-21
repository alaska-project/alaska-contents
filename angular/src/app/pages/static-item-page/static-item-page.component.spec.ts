import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticItemPageComponent } from './static-item-page.component';

describe('StaticItemPageComponent', () => {
  let component: StaticItemPageComponent;
  let fixture: ComponentFixture<StaticItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
