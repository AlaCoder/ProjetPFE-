import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattersComponent } from './matters.component';

describe('MattersComponent', () => {
  let component: MattersComponent;
  let fixture: ComponentFixture<MattersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MattersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
