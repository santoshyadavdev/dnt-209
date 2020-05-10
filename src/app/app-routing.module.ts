import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { ProductComponent } from './product/product.component';
// import { TodosComponent } from './todos/todos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },
  { path: 'login', component: LoginComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
