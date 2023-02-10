import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-nsingle-binding',
  templateUrl: './two-way-nsingle-binding.component.html',
  styleUrls: ['./two-way-nsingle-binding.component.css']
})
export class TwoWayNSingleBindingComponent implements OnInit {
  name: string = "sujata";
  minlength:string="Gaikwad";
  placeholdertxt:string="Enter Your Choice";
  myid:string="txtinput";
  constructor() {
 
  }

  ngOnInit(): void {
  }

}
