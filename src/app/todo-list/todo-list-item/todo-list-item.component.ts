import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'app/todo'

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  constructor() { }

 @Input()
  public todo:Todo;


  @Output()
  toggleComplete : EventEmitter<Todo> = new EventEmitter();

  @Output()
  remove : EventEmitter<Todo> = new EventEmitter();


  toggleTodoComplete(todo:Todo) {  
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo:Todo)  {
    this.remove.emit(todo);
  }


  ngOnInit() {
  }

}
