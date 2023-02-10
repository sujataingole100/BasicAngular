import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  firstName:string;
  lastName:string;
  studentstr:string[]=['student1','student2','student3']
  studentrollno:number[];
  student = {
    Name:'student1',
    RollNo:'12',
    Marks:'80%'
  };
  
  constructor() { 
    this.firstName="Sujata";
    this.lastName="Gaikwad";
    this.studentrollno=[1,2,3,4,5];
  }

  ngOnInit(): void {
  }

}
