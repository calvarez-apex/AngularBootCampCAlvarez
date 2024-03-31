import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCapitalize]'
})
export class CapitalizeDirective {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.innerText = 
        this.el.nativeElement.innerText
          .split(' ')
          .map((s: string) => s.charAt(0).toLocaleUpperCase() + s.substring(1))
          .join(' ');
  }
}
