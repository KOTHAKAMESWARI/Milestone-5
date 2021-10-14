import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeService } from '../employee.service';
import {Employee} from '../../mock/employee.service.mock';
import {RouterMock} from '../../mock/router.mock';
import { Router } from '@angular/router';

import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ],
      providers : [ { provide : EmployeeService,useClass:Employee},{provide : Router,useClass:RouterMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
