import { Injectable, signal } from '@angular/core';



interface Usuario{
  nome: string,
  sobrenome: string
}

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {

  public usuarios = signal<Usuario[]>([
    {
      nome: "gil", sobrenome: "oliveira"
    },
    {
      nome: "claudio", sobrenome: "ramos"
    }
  ])
  


}
