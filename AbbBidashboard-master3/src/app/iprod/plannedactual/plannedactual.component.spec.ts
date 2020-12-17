import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedactualComponent } from './plannedactual.component';

describe('PlannedactualComponent', () => {
  let component: PlannedactualComponent;
  let fixture: ComponentFixture<PlannedactualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannedactualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedactualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
