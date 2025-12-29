import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Common {
  
  private _data = signal<string>("Dado atual")


  data = this._data.asReadonly()

  atualizarMenssagem(novoTexto: string){
    this._data.set(novoTexto);
  }

}
