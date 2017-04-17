import { Component, EventEmitter, Output } from '@angular/core';
import {TodoDataService} from './services/todo-data.service';
import { Todo } from './todo'
import { Auth } from "app/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Auth]
})
export class AppComponent {
  constructor(private todoDataService:TodoDataService,private auth: Auth){    
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

   onToggleComplete(todo:Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo:Todo){
    this.todoDataService.deleteTodoById(todo.id); 
  }

}
