import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-btn',
  templateUrl: './reusable-btn.component.html',
  styleUrls: ['./reusable-btn.component.css']
})
export class ReusableBtnComponent implements OnInit {
  @Input() buttonTxt: string = '';
  @Input() buttonClass: string = '';
  @Output() onBtnClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.onBtnClicked.emit("hi");
    alert("hi");
  }
}
