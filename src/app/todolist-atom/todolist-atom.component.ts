import { Component, Input, OnInit } from '@angular/core';

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

}
