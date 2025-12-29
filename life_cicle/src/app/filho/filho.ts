import { AfterViewInit, Component, ElementRef, input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-filho',
  imports: [],
  templateUrl: './filho.html',
  styleUrl: './filho.css',
})
export class Filho implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  data = input<String>("");

  @ViewChild("logger")
  logs!: ElementRef;

  constructor(
    private renderer: Renderer2
  ){
    console.log(`[${Date.now()}] Cosntructor`)
  }
  
  ngOnInit(){
    console.log(`\n[${Date.now()}] ngOnInit`)
    
  }

  ngAfterViewInit(){
    this.logs && this.renderer.appendChild(this.logs.nativeElement, this.criarTexto(`\n[${Date.now()}] ngAfterViewInit`))
  }

  ngOnChanges(changes: SimpleChanges) {
    this.logs && this.renderer.appendChild(this.logs.nativeElement, this.criarTexto(`\n[${Date.now()}] ngOnChanges ${this.data} ${changes}`))
  }

  ngOnDestroy() {
    this.logs && this.renderer.appendChild(this.logs.nativeElement, this.criarTexto(`\n[${Date.now()}] ngOnDestroy`))
    alert("ngOnDestroy")
  }

  onDestroy() {
    this.logs && this.renderer.appendChild(this.logs.nativeElement, this.criarTexto(`\n[${Date.now()}] onDestroy `))
    alert("onDestroy")
  }
  
  criarTexto(texto: string): any {
    return this.renderer.createText(texto)
  }
}
