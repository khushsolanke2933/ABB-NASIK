import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardconsolidatedComponent } from './dashboardconsolidated.component';

describe('DashboardconsolidatedComponent', () => {
  let component: DashboardconsolidatedComponent;
  let fixture: ComponentFixture<DashboardconsolidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardconsolidatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardconsolidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
