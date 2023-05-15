import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineValidatedComponent } from './timeline-validated.component';

describe('TimelineValidatedComponent', () => {
  let component: TimelineValidatedComponent;
  let fixture: ComponentFixture<TimelineValidatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineValidatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
