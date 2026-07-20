import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorInsurance } from './motor-insurance';

describe('MotorInsurance', () => {
  let component: MotorInsurance;
  let fixture: ComponentFixture<MotorInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorInsurance],
    }).compileComponents();

    fixture = TestBed.createComponent(MotorInsurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
