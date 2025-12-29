import { Component, inject } from '@angular/core';
import { Common } from '../common';

@Component({
  selector: 'app-bcomponent',
  imports: [],
  templateUrl: './bcomponent.html',
  styleUrl: './bcomponent.css',
})
export class BComponent {

  common = inject(Common);

  
}
