import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  color:string=''
  courseObj=new course;
  value:any;
  cities:any='';
  selectedCity:any='';
  Passwordpattern = "/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"
  courseForm: FormGroup
  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
    this.courseObj=new course;
    this.courseForm = new FormGroup({
      CourseId: new FormControl('0'),
      CourseName: new FormControl('', [Validators.required]),
      CourseDuration: new FormControl('', [Validators.required, Validators.minLength(3)]),
      CourseBasicFees: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]),
      Password: new FormControl('', [Validators.required, Validators.pattern(this.Passwordpattern)])
    })
  }

  ngOnInit(): void {
  }
  onAddCourse() {
    debugger
    const formValue = this.courseForm.value;
  }


}
export class course {
  CourseId: number;
  CourseName: string;
  CourseDuration: string;
  CourseBasicFees: number;
  constructor() {
    this.CourseId = 0,
      this.CourseName = '',
      this.CourseDuration = '',
      this.CourseBasicFees = 0
  }
}
