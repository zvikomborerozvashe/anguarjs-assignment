import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';

@NgModule({
  declarations: [WrapperComponent, DashboardComponent, InfoComponent, UserComponent, WrapperComponent, LeaveManagementComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }