import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeComponent, FormControlDemoComponent,
    EmployeeOnboardingComponent, ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
