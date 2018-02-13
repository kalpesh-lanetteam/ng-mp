import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuperUserComponent} from './super-user/super-user.component';
import {DashboardRouting} from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting
  ],
  declarations: [SuperUserComponent]
})
export class DashboardModule {
}
