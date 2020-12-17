import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardliveComponent } from './dashboardlive.component';

describe('DashboardliveComponent', () => {
  let component: DashboardliveComponent;
  let fixture: ComponentFixture<DashboardliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
