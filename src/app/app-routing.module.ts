import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { ProductComponent } from './product/product.component';
// import { TodosComponent } from './todos/todos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule),
    canLoad : [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'department', component: DepartmentComponent, canActivate: [AuthGuard] },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading,
    // useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
