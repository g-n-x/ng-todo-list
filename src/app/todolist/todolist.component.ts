import { Component, OnInit } from '@angular/core';
import { ITodoList } from '../todolist.interface';
import { todoList } from '../globals';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tlist = todoList;
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(title: string, description: string) {

    if(title == '' || description == '') {
      alert('you must describe both');
      return;
    }

    let tl: ITodoList = {
      title: title,
      description: description
    };

    todoList.push(tl);
  }

}
