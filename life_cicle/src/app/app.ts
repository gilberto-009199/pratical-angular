import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Filho } from "./filho/filho";

@Component({
  selector: 'app-root',
  imports: [ Filho ], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  data = signal<string>("Dados");
  mostrarObjeto = false;

  alterarConteudo(){
    this.data.update(d => d+'a')
  }
  destruirObjeto(){
    this.mostrarObjeto = !this.mostrarObjeto
  }
}
