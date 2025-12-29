import { Component } from '@angular/core';
import { FilhoComponent } from './filho-component/filho-component';
import { PaiComponent } from './pai-component/pai-component';

@Component({
  selector: 'app-output',
  imports: [PaiComponent],
  templateUrl: './output.html',
  styleUrl: './output.css',
})
export class Output {

}
