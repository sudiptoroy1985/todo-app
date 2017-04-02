import { Injectable } from '@angular/core';
import { Todo } from 'app/todo'

@Injectable()
export class TodoDataService {
  lastid : number = 0;
  todos: Todo[] = [];

  constructor() { }

  addTodo(todo:Todo):TodoDataService{
    if(!todo.id)
    {
      todo.id = ++this.lastid;
    }
    this.todos.push(todo);
    return this;
  }

   deleteTodoById(id:number):TodoDataService{
     this.todos = this.todos.filter(t => t.id !== id);
     return this;     
   }


   getTodoById(id:number) : Todo{
     return this.todos.filter(t=>t.id==id).pop();
   }
    
  //  updateTodoById(id:number): Todo{
  //    let todo = this.getTodoById(id);
  //    if(!todo)
  //    {
  //      return null;
  //    }
  //    Object.assign(todo,values);
  //    return todo;     
  //  }

   getAllTodos(): Todo[]{
     return this.todos;
   }

    toggleTodoComplete(todo:Todo){
    //  let updatedTodo = this.updateTodoById(todo.id, {
    //     complete: !todo.complete
    //  });

    }

}
