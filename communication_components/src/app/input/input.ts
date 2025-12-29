import { Component } from '@angular/core';
import { PaiComponent } from './pai-component/pai-component';
import { FilhoComponent } from './filho-component/filho-component';

@Component({
  selector: 'app-input',
  imports: [PaiComponent],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  
}
