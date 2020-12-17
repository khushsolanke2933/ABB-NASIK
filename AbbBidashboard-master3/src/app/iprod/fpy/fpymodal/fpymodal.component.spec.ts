import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpymodalComponent } from './fpymodal.component';

describe('FpymodalComponent', () => {
  let component: FpymodalComponent;
  let fixture: ComponentFixture<FpymodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpymodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
