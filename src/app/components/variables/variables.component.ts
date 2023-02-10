import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
   name:string="sujata";
   student:any;
   rono:any="rollnumber";
  constructor() {
    
    this.student = {
     
    }
  }

     
   

  ngOnInit(): void {
  }

}
