import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from "app/todo";

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  addTodo(todoTitle:string,$event) {
    $event.target.value = null;
    var todoObj = new Todo({
          title: todoTitle,
          complete: false
        });
    this.add.emit(todoObj);
  }

  ngOnInit() {
  }

}
