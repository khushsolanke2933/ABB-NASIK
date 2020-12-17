import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardhistoricalComponent } from './dashboardhistorical.component';

describe('DashboardhistoricalComponent', () => {
  let component: DashboardhistoricalComponent;
  let fixture: ComponentFixture<DashboardhistoricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardhistoricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardhistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
