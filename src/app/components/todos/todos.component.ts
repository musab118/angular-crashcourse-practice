import { Component, OnInit } from '@angular/core';
import {TodoService } from '../../services/todo.service'
import { fromEventPattern } from 'rxjs';
import {Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) {  }

  ngOnInit() {
   this.todoService.getTodos().subscribe(todos =>{
     this.todos = todos;
   });
  }

 
deleteTodo(todo:Todo){
// This just filters out items that have been deleted. 
// basically those with different Id's are still shown

this.todos= this.todos.filter(t=> t.id !== todo.id)
this.todoService.deleteTodo(todo).subscribe();
}

addTodo(todo:Todo){
  this.todoService.addTodo(todo).subscribe(todo=>{
    this.todos.push(todo)
  })
}

}
