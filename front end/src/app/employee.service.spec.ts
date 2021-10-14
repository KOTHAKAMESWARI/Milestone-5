import { getTestBed,TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";



import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(EmployeeService);
  // });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService],
    });
    service = TestBed.inject(EmployeeService);
    httpMock = getTestBed().get(HttpTestingController);
    service = getTestBed().get(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
