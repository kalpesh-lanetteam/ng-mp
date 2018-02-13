import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SuperUserComponent} from './super-user/super-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'super-user', pathMatch: 'full'},
  {path: 'super-user', component: SuperUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouting {
}
