import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthRouting} from './auth.routing';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRouting
  ],
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent]
})
export class AuthModule {
}
