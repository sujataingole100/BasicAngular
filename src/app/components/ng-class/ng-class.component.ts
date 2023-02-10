import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  isdiv1class:boolean=false;
  mySelectorClass:string='';
  newcolor:string='';
  inputcolor:string='';
  isfullwidth:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  addClass(){
    this.isdiv1class=true;
  }
  removeClass(){
    this.isdiv1class=false;
  }
  addcolumn(){
   this.isfullwidth=true;
  }
  removecolumn(){
    this.isfullwidth=false;
  }
  getData(item:string){

  }
}
