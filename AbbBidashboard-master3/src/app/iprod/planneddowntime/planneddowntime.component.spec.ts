import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanneddowntimeComponent } from './planneddowntime.component';

describe('PlanneddowntimeComponent', () => {
  let component: PlanneddowntimeComponent;
  let fixture: ComponentFixture<PlanneddowntimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanneddowntimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanneddowntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
