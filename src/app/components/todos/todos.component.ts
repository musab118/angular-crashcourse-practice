import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import {Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'First Task',
        completed:true

      },
      {
        id: 2,
        title: 'Second Task',
        completed:false

      },
      {
        id: 3,
        title: 'Third Task',
        completed:false

      },
      
    ]
  }

}
