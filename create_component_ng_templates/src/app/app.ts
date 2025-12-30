import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./card/card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Card, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  estaCarregando = signal(true);

  constructor() {
    // Simula o fim de um carregamento após 2 segundos
    setTimeout(() => {
      this.estaCarregando.set(false);
    }, 3000);
  }

}
