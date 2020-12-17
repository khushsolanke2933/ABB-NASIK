import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeemodalComponent } from './oeemodal.component';

describe('OeemodalComponent', () => {
  let component: OeemodalComponent;
  let fixture: ComponentFixture<OeemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
