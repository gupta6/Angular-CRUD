import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRowComponent } from './components/employee-row/employee-row.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { GreenBackgroundDirective } from './directives/green-background.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'employee/edit/:id', component: EmployeeDetailsComponent }, 
  { path: 'employee/add', component: EmployeeDetailsComponent },
  { path: 'employee/delete/:id', component: DeleteEmployeeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    EmployeeRowComponent,
    GreenBackgroundDirective,
    HeaderComponent,
    FooterComponent,
    // DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
