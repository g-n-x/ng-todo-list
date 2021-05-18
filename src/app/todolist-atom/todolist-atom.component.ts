import { Component, Input, OnInit } from '@angular/core';
import { todoList } from '../globals';
import { ITodoList } from '../todolist.interface';

@Component({
  selector: 'app-todolist-atom',
  templateUrl: './todolist-atom.component.html',
  styleUrls: ['./todolist-atom.component.css']
})
export class TodolistAtomComponent implements OnInit {

  @Input()
  public title: string = "";
  @Input()
  public description: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo() {
    var arr: ITodoList = todoList.filter(item => item.title == this.title)[0];
    const i = todoList.indexOf(arr);
    todoList.splice(i, 1);
  }
}
