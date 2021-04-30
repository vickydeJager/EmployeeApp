import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Employee } from '../models/employee';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, HttpClientModule],
      providers: [EmployeeService],
    });
    service = TestBed.inject(EmployeeService);
    httpTestingController =TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);

    service.url = 'http://localhost:3000';
    service.controller = 'employees';
  });

  it('should be created EmployeeService', () => {
    expect(service).toBeTruthy();
  });

  it('should getAll Employees', () => {
    service.getAll().subscribe();
    const request = httpTestingController.expectOne(service.url + '/' + service.controller + '?_sort=id&_order=asc');

    expect(request.request.method).toBeTruthy();
    request.flush({});
  });

  it('should add an employee', () => {
    let emp = new Employee();
    service.addEmployeeInfo(emp).subscribe();
    const request = httpTestingController.expectOne(service.url + '/' + service.controller, '');

    expect(request.request.method).toBeTruthy();
    request.flush({});
  });
});
