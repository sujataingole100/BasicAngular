import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  rollNo:number;
  hasAllDocument:boolean=true;
  Name="sujata";
  currentDate = new Date();
  eployeearr:any;
  employeeOBJ:any;
  num1:number;
  num2:number;
  result:number;

  constructor() { 
    this.rollNo=1;
    this.hasAllDocument;
    this.Name;
    this.currentDate;
    this.num1=12;
    this.num2=40;
    this.result=this.num1+this.num2;
    this.eployeearr=[
      'employee-1',
      120000,
      'fullTime'
    ]
    this.employeeOBJ={
      employeeName:'ABC',
      employeeSalary:30000,
      employeeWorking:"FullTime"
      
    }
  
  }

  ngOnInit(): void {
  }
  Decrement(){
    this.rollNo=this.rollNo-1;
    if(this.rollNo<=0){
      this.rollNo=0;
    }
  }
  Increment(){
    this.rollNo=this.rollNo+1;
  }
  selectcity(){
    alert("city changed")

  }
  AddtionOfNo(){
    this.result = Number(this.num1)+Number(this.num2);
  }
}
