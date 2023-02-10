import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  newColor:string='';
  div2width:any;
  addproperty:any;
  binding:number=0;
  studentobj:any[];
  constructor() {
    this.studentobj=[
      {
        name:"sujata",
        percentage:70
      },
      {
        name:"Radha",
        percentage:90
      },
      {
        name:"Rani",
        percentage:40
      },
      {
        name:"Radhika",
        percentage:60
      },
      {
        name:"sujata",
        percentage:10
      }
    ]
    this.addproperty={

    }
   }

  ngOnInit(): void {
  }
  addColor(){
    this.newColor='red';
  }
  removeColor(){
    this.newColor='';
  }
  addwidth(){
    debugger;
    this.div2width=20;
  }
  removewidth(){
    this.div2width=null;
  }
  addmystyle(){
    this.addproperty={
      'color':'red',
      'background-color':'black',
      'font-size':'40px'
    }
  }
  removemystyle(){
    this.addproperty={
      'color':'black',
      'background-color':'white',
      'font-size':'20px'
    }
  }
}
