import { Component, OnInit } from '@angular/core';
import { ITodoList } from '../todolist.interface';

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.css']
})
export class TodolistListComponent implements OnInit {
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
  public todoList: ITodoList[] = [ this.apple, this.cow, this.chocolate ];

  constructor() { }

  ngOnInit(): void {
  }

}
