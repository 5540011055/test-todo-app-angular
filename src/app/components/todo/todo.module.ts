import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from '../../components/todo/todo-routing.module';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoItemComponent } from '../todo-item/todo-item.component';

//import { ApiService } from '../../service/api.service';
@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //TodoItemComponent
    //ApiService
  ],
  declarations: [TodoComponent, TodoItemComponent]
})
export class TodoModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/