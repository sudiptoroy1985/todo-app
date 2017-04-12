import { Component, EventEmitter } from '@angular/core';
import {TodoDataService} from './services/todo-data.service';
import { Todo } from './todo'
import { Auth } from "app/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService,Auth]
})
export class AppComponent {
  constructor(private todoDataService:TodoDataService,private auth: Auth){    
  }

  newTodo: Todo = new Todo();

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

   toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

}
