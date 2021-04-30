import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeAddEditComponent } from '../employee-add-edit/employee-add-edit.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class EmployeeListComponent implements OnInit {

  employee: Employee[] = [];

  dataSource: MatTableDataSource<Employee[]> = new MatTableDataSource<Employee[]>([]);
  columnsToDisplay = ['id', 'name', 'surname', 'jobTitle', 'email', 'action'];

  searchForm: FormGroup;
  private totalItems: number = 0;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    public dialog: MatDialog) {
    this.getAllEmplopees();
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchValue: [''],
    });
  }

  getAllEmplopees() {
    this.employeeService.getAll()
      .toPromise().then(
        items => {
          this.employee = items;
          this.totalItems = items.lenght;
          this.dataSource = items;
        }
      );
  }

  search() {
    const value = this.searchForm.value
    if (value.length >= 1) {
      this.employeeService.filter(value).toPromise().then(
        items => {
          console.warn(items);
          this.dataSource = new MatTableDataSource<Employee[]>(items);
        }
      );
    } else {
      this.getAllEmplopees();
    }
  }

  addEmployee() {
    this.openDailog(new Employee(), true);
  }

  editEmployee(employeeInfo: Employee) {
    this.openDailog(employeeInfo, false);
  }

  openDailog(employeeInfo: Employee, isNewEmployee: boolean) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = { employee: employeeInfo, newEmployee: isNewEmployee };

    const dialogRef = this.dialog.open(EmployeeAddEditComponent, dialogConfig);

    dialogRef.afterClosed()
      .toPromise().then(
        result => {
          if (result) {
            if (isNewEmployee) {
              this.callAdd(result)
            } else {
              this.callUpdate(result)
            }

          }
        },
        error => { console.error(error); }
      );
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployeeInfo(id).toPromise().then(
      item => {
        if (item) {
          this.getAllEmplopees();
        }
      }
    );
  }

  callUpdate(result) {
    this.employeeService.updateEmployeeInfo(result).subscribe(
      item => {
        if (item) {
          this.getAllEmplopees();
        }
      }
    );
  }

  callAdd(result) {
    result.id = this.totalItems + 1;
    this.employeeService.addEmployeeInfo(result).toPromise().then(
      item => {
        if (item) {
          this.getAllEmplopees();
        }
      }
    );
  }
}
