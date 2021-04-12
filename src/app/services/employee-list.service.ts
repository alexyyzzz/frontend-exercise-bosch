import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeList } from '../services/employee-list';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private http: HttpClient) { }

  getEmployeeList (): Observable<EmployeeList[]> {
    return this.http.get<EmployeeList[]>('https://tworks-exercise-api.herokuapp.com/employee/list');
  }

  addEmployee (employee:EmployeeList): void {
    this.http.post('https://tworks-exercise-api.herokuapp.com/employee/add', employee).subscribe();
  }
}
