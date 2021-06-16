//import { Component, OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() item: any;
 
  @Input() i : any;

  @Output() changed = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {

    //console.log(this.i);

  }
  
  deleteTodo(id: number) {
    //console.log(this.item);
    this.changed.emit(id);
    //this.item = this.item.filter((v : any, i : any) => i !== id);
    //delete this.item[id];
  }





}
