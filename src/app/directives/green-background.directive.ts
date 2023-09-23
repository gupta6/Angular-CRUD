import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGreenBackground]',
})
export class GreenBackgroundDirective {
  constructor(private el: ElementRef) {}

  // @HostListener('mouseover')
  // onMouseOver() {
  //   console.log(this.el);
  //   this.el.nativeElement.childNodes.forEach((element: any) => {
  //     return (element.style.backgroundColor = '#aaf0d1');
  //   });
  // }

  // @HostListener('mouseout')
  // onMouseOut() {
  //   this.el.nativeElement.childNodes.forEach((element: any) => {
  //     return (element.style.backgroundColor = '#F5F5F5');
  //   });
  // }
}
