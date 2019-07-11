import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingTargetSwitcherComponent } from './publishing-target-switcher.component';

describe('PublishingTargetSwitcherComponent', () => {
  let component: PublishingTargetSwitcherComponent;
  let fixture: ComponentFixture<PublishingTargetSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishingTargetSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingTargetSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
