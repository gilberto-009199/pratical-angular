import { Component, model, signal } from '@angular/core';

@Component({
  selector: 'app-filho-component',
  imports: [],
  templateUrl: './filho-component.html',
  styleUrl: './filho-component.css',
})
export class FilhoComponent {

  texto = signal("");
  dadoTrocado = model<string>("Dados");


  mudarTexto() {
    this.dadoTrocado.set(this.texto());
  }

}
