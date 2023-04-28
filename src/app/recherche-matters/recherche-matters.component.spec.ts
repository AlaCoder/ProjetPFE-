import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheMattersComponent } from './recherche-matters.component';

describe('RechercheMattersComponent', () => {
  let component: RechercheMattersComponent;
  let fixture: ComponentFixture<RechercheMattersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheMattersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
