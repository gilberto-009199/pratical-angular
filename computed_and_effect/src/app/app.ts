import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImcFeedback } from "./imc-feedback/imc-feedback";

@Component({
  selector: 'app-root',
  imports: [ImcFeedback],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('computed_and_effect');

  altura = signal<number>(0);
  peso = signal<number>(0);
  idade = signal<number>(0);

  imc = computed<number>(() => {

    if(this.peso() < 1)return 0;
    if(this.altura() < 1)return 0;

    return this.peso() / (this.altura() * this.altura());

  });
  tmb = computed<number>(() =>  {
    
    if(this.peso() < 1)return 0;
    if(this.altura() < 1)return 0;

    return 66 + (13.7 * this.peso()) + (5 * (this.altura() * 100)) - (6.8 * this.idade()) 
  });

}
