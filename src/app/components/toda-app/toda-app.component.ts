import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toda-app',
  templateUrl: './toda-app.component.html',
  styleUrls: ['./toda-app.component.css']
})
export class TodaAppComponent implements OnInit {
  todoObj: todo;
  todoArray: Itodo[];
  value:any;
  constructor(private router:Router) {
    this.todoObj = new todo();
    this.todoArray = [];
    this.value=new Date()
  }

  ngOnInit(): void {
    const getData=localStorage.getItem('toDO');
    if(getData!= null){
      this.todoArray=JSON.parse(getData)
    }
  }
  OnAddRecord(){
    this.todoArray.push(this.todoObj);
    localStorage.setItem('toDO',JSON.stringify(this.todoArray));
    this.todoObj = new todo();
  }
  onRedirect(){
this.router.navigate(['form',123]);
  }

}
export class todo {
  todoItem: string;
  color: string;
  constructor() {
    this.todoItem = '',
    this.color = ''
  }
}
export interface Itodo {
  todoItem: string;
  color: string;
}
