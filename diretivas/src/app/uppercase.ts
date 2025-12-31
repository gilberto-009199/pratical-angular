import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class Uppercase {

  
  constructor(
    private el: ElementRef
  ) {}

  @HostListener('input', ['$event'])
  onInput(event: Event){
    
    const valor = this.el.nativeElement.value;

    this.el.nativeElement.value = valor.toUpperCase();

  }

}
