import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/models/Todo';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

//Set dynamic classes for changes 

setClasses() {
  let classes = {
    todo: true,
    'is-complete': this.todo.completed
  }
  return classes;
}

onToggle(todo){
  // Toggle UI elements
  todo.completed = !todo.completed;
  // Toggle on server items
  this.todoService.toggleCompleted(todo).subscribe(todo =>{console.log(todo)})
}

onDelete(todo){
  this.deleteTodo.emit(todo)
}

}
 //Services at 45:30