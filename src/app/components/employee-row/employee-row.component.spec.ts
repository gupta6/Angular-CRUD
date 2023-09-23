import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRowComponent } from './employee-row.component';

describe('EmployeeRowComponent', () => {
  let component: EmployeeRowComponent;
  let fixture: ComponentFixture<EmployeeRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeRowComponent]
    });
    fixture = TestBed.createComponent(EmployeeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
