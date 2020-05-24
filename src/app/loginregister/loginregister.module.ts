import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginregisterRoutingModule } from './loginregister-routing.module';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgetpwdpageComponent } from './forgetpwdpage/forgetpwdpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    LoginregisterRoutingModule
  ],
  declarations: [RegisterpageComponent, LoginpageComponent, ForgetpwdpageComponent, DashboardComponent]
})
export class LoginregisterModule { }
