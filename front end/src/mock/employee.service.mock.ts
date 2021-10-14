import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Employee {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor() { }

  getEmployeesList(): Observable<any[]> {
    return of(null);
  }

  createEmployee(employee: any): Observable<Object> {
    return of(null);
  }

  getEmployeeById(id: number): Observable<any> {
    return of({firstName:"prasanna",lastName:'M',emailId:"prasanna@gmail.com"});
  }

  updateEmployee(id: number, employee: any): Observable<Object> {
    return of(null);
  }

  deleteEmployee(id: number): Observable<Object> {
    return of(null);
  }
}


