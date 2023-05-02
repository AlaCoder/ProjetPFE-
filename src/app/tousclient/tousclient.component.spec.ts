import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousclientComponent } from './tousclient.component';

describe('TousclientComponent', () => {
  let component: TousclientComponent;
  let fixture: ComponentFixture<TousclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TousclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
