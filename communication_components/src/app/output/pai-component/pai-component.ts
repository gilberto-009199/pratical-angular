import { Component, signal } from '@angular/core';
import { FilhoComponent } from '../filho-component/filho-component';

@Component({
  selector: 'app-pai-component',
  imports: [FilhoComponent],
  templateUrl: './pai-component.html',
  styleUrl: './pai-component.css',
})
export class PaiComponent {
  cliques = signal<number>(0)

  updateCliques(data : number){
    
    this.cliques.update(value => value + data);

  }
}
