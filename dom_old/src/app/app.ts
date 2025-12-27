import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected titulo : string  = "<Meu titulo>";
  protected menssagem: string = "<menssagem>";

  protected listNomes: string[] = [
    "GIl",
    "Claudio",
    "Liquigas"
  ];

  processarInputNome(input : string){
    this.menssagem = input;
  }
}
