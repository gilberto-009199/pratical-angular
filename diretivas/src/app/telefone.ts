import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTelefone]',
  standalone: true
})
export class Telefone {

  constructor(
    private el: ElementRef
  ) {}

  @HostListener('input', ['$event'])
  onInput(event: Event){
    
    console.log(event);

    let valor = (event.target as any).value;
    
    console.log(valor);

    // 1. Remove tudo que não for número
    valor = valor.replace(/\D/g, '');
    
    console.log("valor = valor.replace(/\D/g, '');", valor);

    // 2. Aplica a máscara progressivamente
    if (valor.length > 0) {
      // (11) 98888-7777
      valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
      valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    }

    // 3. Limita o tamanho máximo (DDD + 9 dígitos)
    if (valor.length > 15) {
      valor = valor.substring(0, 15);
    }

    // 4. Atualiza o valor no campo
    this.el.nativeElement.value = valor;
  }

}
