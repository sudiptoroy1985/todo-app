import { Component } from '@angular/core';
import {TodoDataService} from './services/todo-data.service';
import { Todo} from './todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  constructor(private todoDataService:TodoDataService){    
  }

  newTodo: Todo = new Todo();

   addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
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
