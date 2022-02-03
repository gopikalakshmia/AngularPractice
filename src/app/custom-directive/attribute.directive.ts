import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  constructor(private elemetref:ElementRef) { }
  OnInit(){
    console.log(this.elemetref.nativeElement.value);
   }

}
