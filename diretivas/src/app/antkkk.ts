import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAntkkk]',
})
export class Antkkk {


  constructor(
    private el: ElementRef
  ) {}

  @HostListener('input', ['$event'])
  onInput(event: Event){
    
    const valor = this.el.nativeElement.value;

    this.el.nativeElement.value = valor.replaceAll("kkk","");

  }

}
