import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-filho-component',
  imports: [],
  templateUrl: './filho-component.html',
  styleUrl: './filho-component.css',
})
export class FilhoComponent {
  
  contador = output<number>();
  
  @Output("contador2")
  contador2 = new EventEmitter<number>();

}
