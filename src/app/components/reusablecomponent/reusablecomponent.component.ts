import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reusablecomponent',
  templateUrl: './reusablecomponent.component.html',
  styleUrls: ['./reusablecomponent.component.css']
})
export class ReusablecomponentComponent implements OnInit,OnChanges{
  @Input() message:string='';
  @Input() alertType:string='';
  constructor() { }

  ngOnInit(): void {
  }
ngOnChanges(changes: SimpleChanges): void {
  debugger
}
}
