import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginpageComponent } from './loginpage/loginpage.component'
import { ForgetpwdpageComponent } from './forgetpwdpage/forgetpwdpage.component'
import { RegisterpageComponent } from './registerpage/registerpage.component'


const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'register', component: RegisterpageComponent},
  {path: 'forgotpwd', component: ForgetpwdpageComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LoginregisterRoutingModule { }