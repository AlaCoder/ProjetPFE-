import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvTimesheetComponent } from './nv-timesheet.component';

describe('NvTimesheetComponent', () => {
  let component: NvTimesheetComponent;
  let fixture: ComponentFixture<NvTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvTimesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
