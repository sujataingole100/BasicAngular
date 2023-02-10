import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public el:ElementRef) {
    // el.nativeElement.style.color='red';
  }
 @HostListener('mouseover')
 onScroll(event:any):void{
  console.log("onScroll");
  this.el.nativeElement.style.color='red';
 }
 @HostListener('mouseout')
 mouseOut()
 {
  this.el.nativeElement.style.color='black';
 }
}
