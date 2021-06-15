import { Component, OnInit } from '@angular/core';
//import { Todo } from './../../models/todo';
import { ApiService } from '../../service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  h1 = "Todo List";
  todoForm : FormGroup;

  txtPh = "Please enter name todo.";
  txtId = "Please enter User id.";
  txtSubmit = "Add Todo";

  data:Array<any> | undefined

  constructor (private Api: ApiService,private fb: FormBuilder){
    this.data = new Array<any>()

    this.todoForm = this.fb.group({
      title: [''],
      userId: ['']
    });
    this.todoForm.valueChanges.subscribe(console.log);

  
  }

  ngOnInit(): void {
    this.Api.getDataTodo().subscribe((resp) => {
      //console.log(resp);
      this.data = resp;
      console.log(this.data
        );
    });
  }

  toggleDone(id: number) {
    console.log("Click : " + id);
    this.data?.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id: number) {
    this.data = this.data?.filter((v, i) => i !== id);
  }

  addTodo() {
    console.log(this.todoForm.controls.value);
    // this.todos.concat(this.todoForm.value);
    this.data?.push({
      userId: this.todoForm.controls['userId'].value,
      title: this.todoForm.controls['title'].value
    });
  }


}
