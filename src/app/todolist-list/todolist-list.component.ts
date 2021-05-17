import { Component, Input, OnInit } from '@angular/core';
import { ITodoList } from '../todolist.interface';

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.css']
})
export class TodolistListComponent implements OnInit {
  @Input()
  public todoList: ITodoList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {

  }

}
