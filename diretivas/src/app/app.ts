import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Uppercase } from "./uppercase";
import { Antkkk } from "./antkkk";
import { Telefone } from './telefone';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Uppercase, Antkkk, Telefone],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('diretivas');
}
