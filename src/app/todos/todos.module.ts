import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@NgModule({
  declarations: [TodosComponent, TodoAddComponent, TodoListComponent, TodoDetailsComponent,],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule
  ]
})
export class TodosModule { }
