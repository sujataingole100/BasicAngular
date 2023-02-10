import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAdminaccess]'
})
export class AdminaccessDirective {

  constructor(public el:ElementRef) {
    debugger
    const role=localStorage.getItem('role');
    if(role=='student'){
      el.nativeElement.style.color='black';
    }
   }

}
