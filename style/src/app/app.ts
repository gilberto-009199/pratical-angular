import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected isVerde: boolean = true;
  
  protected btnColor: string = "red";
  protected btnFont: string = "2";

  protected status: string = "ok";


  @ViewChild('meuCard') card!: ElementRef;

  constructor(private renderer: Renderer2){}

  customizarCard(){
    
    this.renderer.setStyle(this.card.nativeElement, 'background', 'yellow');
    
    this.renderer.addClass(this.card.nativeElement, 'borda-colorida');

  }

}
