import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'onboarding', component: EmployeeOnboardingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
