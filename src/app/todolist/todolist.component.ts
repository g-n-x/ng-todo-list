import { Component, OnInit } from '@angular/core';
import { ITodoList } from '../todolist.interface';
import { todoList } from '../globals';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  apple: ITodoList = {
    title:"りんご",
    description:"美味しいの果物"
  };
  cow: ITodoList = {
    title:"牛",
    description:"おいしいの肉"
  };
  chocolate: ITodoList = {
    title:"Chocolate",
    description:"nham nham"
  };
  orange: ITodoList = {
    title: "orange",
    description: "failed"
  }
  
  pericles = todoList;
  constructor() { }

  ngOnInit(): void {
    todoList.push(this.apple);
    todoList.push(this.cow);
    todoList.push(this.chocolate);
    todoList.push(this.orange);
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
