import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  employee: BehaviorSubject<Employee> = new BehaviorSubject<Employee>(new Employee());
  profileForm: FormGroup;

  constructor( private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [''],
      surname: [''],
      jobTitle: [''],
      email: [''],
      residentialAddress: [''],
      workAddress: [''],
    });
  }

  onSubmit(){

  }
}
