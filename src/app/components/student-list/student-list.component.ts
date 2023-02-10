import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentName:string;
  studentName1:string;
  constructor() { 
    this.studentName="Student1"
    this.studentName1="Student2"
  }

  ngOnInit(): void {
  }

}
