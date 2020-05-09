import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';


const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
