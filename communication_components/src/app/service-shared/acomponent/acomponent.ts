import { Component, inject } from '@angular/core';
import { Common } from '../common';

@Component({
  selector: 'app-acomponent',
  imports: [],
  templateUrl: './acomponent.html',
  styleUrl: './acomponent.css',
})
export class AComponent {

  common = inject(Common);


  

}
