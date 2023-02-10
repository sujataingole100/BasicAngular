import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formId:number=0;
  productobj: any;
  color: string = '';
  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
    this.productobj = {
      name: '',
      category: '',
      oprice: '',
      isdiscount: '',
      discountamout: '',
      finalamount: '',
      iswashable: '',
      colorArray: []
    }
    this.activatedRoute.params.subscribe((result)=>{
      this.formId=result['formid'];
    })
  }

  ngOnInit(): void {
  }
  calculateprice(){
    this.productobj.finalamount=this.productobj.oprice-this.productobj.discountamout;
  }
  addcolor() {
    debugger
    this.productobj.colorArray.push(this.color);
  }
}
