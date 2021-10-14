import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeService } from '../employee.service';
import {Employee} from '../../mock/employee.service.mock';
import {RouterMock} from '../../mock/router.mock';
import { ActivatedRoute, Router } from '@angular/router';

import { UpdateEmployeeComponent } from './update-employee.component';
import { Observable, of } from 'rxjs';

describe('UpdateEmployeeComponent', () => {
  let component: UpdateEmployeeComponent;
  let fixture: ComponentFixture<UpdateEmployeeComponent>;
  let activatedMock = {
    parent: {
      data: of({
        pageType: null,
      }),
    },
    snapshot:{
      params:{id:100}
    }
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeComponent ],
      providers : [ { provide : EmployeeService,useClass:Employee},{provide : Router,useClass:RouterMock},{provide : ActivatedRoute,useValue:activatedMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
