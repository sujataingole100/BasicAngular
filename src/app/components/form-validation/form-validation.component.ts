import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  SelectSymptons: any;
  clientdetails: any;

  // pendingtest:boolean=false;
  constructor() {
    this.SelectSymptons = '';
    this.clientdetails = {
      dateOfBirth: new Date(),
      fName: '',
      lName: '',
      ContactDetails: '',
      PhoneNumber: '',
      pendingtest:'',
      coviddetected:'',
      emailid:'',
      symptomsarray: []
    }
  }

  ngOnInit(): void {
  }
  addsymptons() {
    this.clientdetails.symptomsarray.push(this.SelectSymptons);
  }
}
