import { Employee } from 'src/app/models/employee';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})

export class EmployeeAddEditComponent implements OnInit {

  employee: BehaviorSubject<Employee> = new BehaviorSubject<Employee>(new Employee());
  newEmployee: boolean;

  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    if (data) {
      this.employee.next(data.employee);
      this.newEmployee = data.newEmployee;
    }
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group(
      this.employee.value
    );
  }

  onSubmit(){
    this.dialogRef.close(this.profileForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
