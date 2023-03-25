import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvClientComponent } from './nv-client.component';

describe('NvClientComponent', () => {
  let component: NvClientComponent;
  let fixture: ComponentFixture<NvClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
