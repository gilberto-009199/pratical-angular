import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-filho-component',
  imports: [],
  standalone: true,
  templateUrl: './filho-component.html',
  styleUrl: './filho-component.css',
})
export class FilhoComponent {
  
  menssagem = input<string>("Valor Padrão")

  @Input("menssagemPorDecorator")
  menssagemPorDecorator = "";
}
