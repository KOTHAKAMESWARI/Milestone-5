import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../mock/employee.service.mock';
import { RouterMock } from '../../mock/router.mock';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details.component';
import { of } from 'rxjs';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

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
      declarations: [EmployeeDetailsComponent],
      providers: [
        { provide: EmployeeService, useClass: Employee },
        { provide: ActivatedRoute, useValue: activatedMock },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
