import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { PaymentsComponent } from './payments/payments.component';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { VettingComponent } from './vetting/vetting.component';
import { CertificateGeneratorComponent } from './certificate-generator/certificate-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmployeeDashboardComponent,
    DashboardComponent,
    LeaveManagementComponent,
    PaymentsComponent,
    CourseCatalogComponent,
    VettingComponent,
    CertificateGeneratorComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
