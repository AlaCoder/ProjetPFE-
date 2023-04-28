import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisComponent } from './frais.component';

describe('FraisComponent', () => {
  let component: FraisComponent;
  let fixture: ComponentFixture<FraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
