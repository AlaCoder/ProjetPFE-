import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimelineComponent } from './edit-timeline.component';

describe('EditTimelineComponent', () => {
  let component: EditTimelineComponent;
  let fixture: ComponentFixture<EditTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
