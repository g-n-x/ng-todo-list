import { Component, OnInit } from '@angular/core';
import { ITodoList } from '../todolist.interface';

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
  public todoList: ITodoList[] = [ this.apple, this.cow, this.chocolate, this.orange ];
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(title: string, description: string) {

    if(title == '' || description == '') {
      alert('you must describe both');
      return;
    }

    let todolist: ITodoList = {
      title: title,
      description: description
    };

    this.todoList.push(todolist);
  }

}
