import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ProfileComponent ],
      providers: [
        FormBuilder,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;

  });

  it('should create ProfileComponent', () => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
