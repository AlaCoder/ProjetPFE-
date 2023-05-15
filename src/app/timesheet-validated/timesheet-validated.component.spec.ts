import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetValidatedComponent } from './timesheet-validated.component';

describe('TimesheetValidatedComponent', () => {
  let component: TimesheetValidatedComponent;
  let fixture: ComponentFixture<TimesheetValidatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetValidatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
