import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistAtomComponent } from './todolist-atom.component';

describe('TodolistAtomComponent', () => {
  let component: TodolistAtomComponent;
  let fixture: ComponentFixture<TodolistAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistAtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
