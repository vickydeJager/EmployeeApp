import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogMock } from 'src/app/unit-testing/matdialog-mock';
import { Employee } from 'src/app/models/employee';
import { EmployeeAddEditComponent } from './employee-add-edit.component';
import { BehaviorSubject } from 'rxjs';

describe('EmployeeAddEditComponent', () => {
  let component: EmployeeAddEditComponent;
  let fixture: ComponentFixture<EmployeeAddEditComponent>;
  let matDialogMock: MatDialogMock;
  beforeEach( () => {

    matDialogMock = new MatDialogMock();

     TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ EmployeeAddEditComponent ],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: {} },
        { provide: MatDialog, useValue: matDialogMock },
        { provide: MAT_DIALOG_DATA, useValue: {Employee} },
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EmployeeAddEditComponent);
    component = fixture.componentInstance;

    component.employee = new BehaviorSubject(new Employee());
  });

  it('should create EmployeeAddEditComponent', () => {
    expect(component).toBeTruthy();
  });
});
