import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( el : ElementRef ) {
    el.nativeElement.addEventListener('mouseenter',() => el.nativeElement.style.backgroundColor = 'yellow');
    el.nativeElement.addEventListener('mouseleave',() => el.nativeElement.style.backgroundColor = '');
  }

}
