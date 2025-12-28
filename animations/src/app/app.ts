import { Component, ElementRef, Renderer2, signal, ViewChild } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'  
})
export class App {

  isLeave = signal(false);

  @ViewChild("quadrado") quadrado!: ElementRef
  

  constructor(
    private builder : AnimationBuilder,
    private renderer: Renderer2
  ){}

  startLeave(){
    this.isLeave.update((leave) => !leave);
  }

  moverPara(event: MouseEvent){

    console.log({clientX: event.clientX, clientY: event.clientY});

    const minhaAnimacao = this.builder.build([
      animate('500ms ease-out', style({
        left: `${event.clientX}px`,
        top: `${event.clientY}px`,
        transform: 'rotate(180deg)'
      }))
    ]);


    const player = minhaAnimacao.create(this.quadrado.nativeElement);


    player.play();


    player.onDone(() => {
      
      this.renderer.setStyle(this.quadrado.nativeElement,'left', `${event.clientX}px`)
      this.renderer.setStyle(this.quadrado.nativeElement,'top', `${event.clientY}px`)

      player.destroy();
      

    });

  }

}
