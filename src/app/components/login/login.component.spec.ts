import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let authServiceSpy: any;

  beforeEach( () => {
    authServiceSpy = jasmine.createSpyObj('AuthServiceSpy', ['token']);

     TestBed.configureTestingModule({
       imports: [HttpClientModule],
      declarations: [ LoginComponent ],
      providers: []
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
    expect(authServiceSpy.token).toBeTruthy();
  });
});
