import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeAddEditComponent } from './components/employee-add-edit/employee-add-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    EmployeeListComponent,
    EmployeeAddEditComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    // GoogleApiModule
  ],
  providers: [
    AuthService
    // {
    //   provide: OAuth2Client,
    //   useValue: new OAuth2Client(
    //     environment.G_API_CLIENT_ID,
    //     environment.G_API_CLIENT_SECRET,
    //     environment.G_API_REDIRECT,
    //   ),
    // }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [EmployeeAddEditComponent]
})
export class AppModule { }
