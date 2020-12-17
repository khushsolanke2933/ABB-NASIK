import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnplanneddowntimeComponent } from './unplanneddowntime.component';

describe('UnplanneddowntimeComponent', () => {
  let component: UnplanneddowntimeComponent;
  let fixture: ComponentFixture<UnplanneddowntimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnplanneddowntimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnplanneddowntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
