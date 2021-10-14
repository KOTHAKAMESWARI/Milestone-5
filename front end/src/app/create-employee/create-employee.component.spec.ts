import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../employee.service';
import {Employee} from '../../mock/employee.service.mock';
import {RouterMock} from '../../mock/router.mock';
import { Router } from '@angular/router';

import { CreateEmployeeComponent } from './create-employee.component';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeComponent ],
      providers : [ { provide : EmployeeService,useClass:Employee},{provide : Router,useClass:RouterMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
