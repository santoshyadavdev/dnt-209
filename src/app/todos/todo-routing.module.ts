import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AuthGuard } from '../guards/auth.guard';
import { TodoAddComponent } from './todo-add/todo-add.component';


const routes: Routes = [
  {
    path: '', component: TodosComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'add', component: TodoAddComponent, canActivate: [AuthGuard] },
      { path: ':id', component: TodoDetailsComponent, canActivate: [AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
