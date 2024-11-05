import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { PaymentsComponent } from './payments/payments.component';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { VettingComponent } from './vetting/vetting.component';
import { CertificateGeneratorComponent } from './certificate-generator/certificate-generator.component';
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'edashboard', component:EmployeeDashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'leave-management', component:LeaveManagementComponent},
  {path:'payments', component:PaymentsComponent},
  {path:'catalogue', component:CourseCatalogComponent},
  {path:'vetting', component:VettingComponent},
  {path:'resources', component:CertificateGeneratorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
