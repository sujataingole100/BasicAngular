import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  isDiv1visible: Boolean = true;
  toogle: boolean = true;
  div4visibility:boolean=false;
  constructor() {

  }

  ngOnInit(): void {
  }

  showdiv1() {
    this.isDiv1visible = true;
  }
  hidediv1() {
    this.isDiv1visible = false;
  }
  ngtoogle() {
    if (this.toogle == true) {
      this.toogle = false;
    }
    else {
      this.toogle = true;
    }
  }
  div4visibilityfun(){
    this.div4visibility=!this.div4visibility;
  }
}
