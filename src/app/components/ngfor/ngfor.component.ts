import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  city:any;
  studentlist:any[];
  addcity:string;
  constructor() {
    this.addcity='';
    this.city = ['pune','Mumbai','solapur','nashik','Hydrabad'];
    this.studentlist=[
      {
        name:'sujata',
        rono:"10"
      },
      {
        name:'abc',
        rono:"11"
      },
      {
        name:'cde',
        rono:"12"
      },
      {
        name:'hij',
        rono:"14"
      },
    ]
   }

  ngOnInit(): void {
  }
  addcityInarray(){
    this.city.push(this.addcity);
  }
  removecityInarray(){
    this.city.pop(this.addcity);
  }
}
