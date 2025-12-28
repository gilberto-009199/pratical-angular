import { Component, ElementRef, Renderer2, signal, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected quantidadeColunas: number = 3;
  protected urlImagem: string = "https://picsum.photos/64/64?grayscale";

  protected btnEnable: boolean = false;

  @ViewChild("conteudo") conteudoElm!: ElementRef;

  constructor(private renderer: Renderer2){}

  alterarAtributo(){
    
    this.renderer.setAttribute(this.conteudoElm.nativeElement, 'data-test', 'alter')  
    this.renderer.setAttribute(this.conteudoElm.nativeElement, 'style', 'background-color: red')  

  }

}
