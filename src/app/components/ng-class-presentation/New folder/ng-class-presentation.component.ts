import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-presentation',
  templateUrl: './ng-class-presentation.component.html',
  styleUrls: ['./ng-class-presentation.component.css']
})
export class NgClassPresentationComponent implements OnInit {
  customerDetailArray: any;
  istable: boolean = false;
  customerDetailsObj: any;
  color: boolean=false;
  constructor() {
    this.customerDetailArray = [];
    this.customerDetailsObj = {
      name: '',
      number: '',
      deviceName: '',
      deviceIcon: '',
      devicePrice: Number,
      discount: Number,
      finalPrice: Number,
      paymentProcess: ''
    }
  }

  ngOnInit(): void {
  }

  onSaveDeviceDetail() {
    debugger;
    this.istable = true;
    this.customerDetailArray.push(this.customerDetailsObj);
    this.customerDetailsObj = {
      name: '',
      number: '',
      deviceName: '',
      deviceIcon: '',
      devicePrice: Number,
      discount: Number,
      finalPrice: Number,
      paymentProcess: ''
    }
  }
  calculatePrice() {
    this.customerDetailsObj.finalPrice = this.customerDetailsObj.devicePrice - (this.customerDetailsObj.devicePrice * (this.customerDetailsObj.discount / 100))
    if (this.customerDetailsObj.finalPrice > 20000) {
      this.color = false
    }
    else {
      this.color = true
    }
  }
  onCancelDeviceDetail(){
    this.istable = false;
    this.customerDetailsObj = {
      name: '',
      number: '',
      deviceName: '',
      deviceIcon: '',
      devicePrice: Number,
      discount: Number,
      finalPrice: Number,
      paymentProcess: ''
    }
  }

}
