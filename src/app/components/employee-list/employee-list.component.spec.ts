import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialogMock } from 'src/app/unit-testing/matdialog-mock';
import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  let matDialogMock: MatDialogMock;

  let employeeServiceSpy: jasmine.SpyObj<EmployeeService>;

  beforeEach(() => {
    employeeServiceSpy = jasmine.createSpyObj('EmployeeServiceSpy', ['getAll']);

    matDialogMock = new MatDialogMock();

    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule],
      declarations: [EmployeeListComponent],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: {} },
        { provide: MatDialog, useValue: matDialogMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
  });

  it('should create EmployeeListComponent and call getAllEmplopees', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog EmployeeAddEditComponent', () => {
    let empl = new Employee();
    spyOn(matDialogMock, 'open').and.stub();

    component.openDailog(empl, true);
    expect(matDialogMock.open).toHaveBeenCalled();
  });

  xit('should call employeeService.getall from getAllEmplopees', () => {
    // spyOn(employeeServiceSpy, 'getAll').and.returnValue(of({}));
    component.getAllEmplopees();
    expect(employeeServiceSpy.getAll).toHaveBeenCalled();
  });
});


