import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000';
  controller = 'employees';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url + '/' + this.controller + '?_sort=id&_order=asc');
  }

  updateEmployeeInfo(employee: Employee){
    return this.http.put(this.url + '/' + this.controller + `/${employee.id}`, employee);
  }

  addEmployeeInfo(employee: Employee){
    return this.http.post(this.url + '/' + this.controller, employee);
  }

  deleteEmployeeInfo(id: number){
    return this.http.delete(this.url + '/' + this.controller + `/${id}`);
  }

  filter(name: string): Observable<any> {
    return this.http.get(this.url + '/' + this.controller + `?name=${name}`);
  }
}
