import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  txtPh = "Please enter todo.";
  txtSubmit = "Add Todo";
  nameTodo: string = "";
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [{
      content: "Work 1",
      completed: true
    }, {
      content: "Work 2",
      completed: false
    }, {
      content: "Work 3",
      completed: false
    }]
  }

  toggleDone(id: number) {
    console.log("Click : " + id);
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.nameTodo,
      completed: false
    }); 
  }


}
