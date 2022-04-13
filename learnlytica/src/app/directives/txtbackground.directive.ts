import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTxtbackground]'
})
export class TxtbackgroundDirective {

  constructor(private myelem: ElementRef)
   {
     this.myelem.nativeElement.style.backgroundColor='yellow';
    }

}
