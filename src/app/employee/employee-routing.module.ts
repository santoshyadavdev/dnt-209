import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { AuthGuard } from '../guards/auth.guard';
import { EmployeeGuard } from './guards/employee.guard';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  {
    path: 'onboarding',
    component: EmployeeOnboardingComponent,
    canActivate: [AuthGuard],
    canDeactivate: [EmployeeGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
