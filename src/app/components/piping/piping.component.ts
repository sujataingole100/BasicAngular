import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piping',
  templateUrl: './piping.component.html',
  styleUrls: ['./piping.component.css']
})
export class PipingComponent implements OnInit {
  name:string="sujata";
  fullname:string="sujata Shyam Ingole";
  MobileNo:number=789.45613321;
  isEducated:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
