import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "app/todo";

@Component({
  selector: 'todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnInit {

  constructor() { }

  @Input()
  todos: Todo[];
  
  ngOnInit() {
  }

}
