import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMatterComponent } from './edit-matter.component';

describe('EditMatterComponent', () => {
  let component: EditMatterComponent;
  let fixture: ComponentFixture<EditMatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
