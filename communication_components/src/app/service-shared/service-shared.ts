import { Component } from '@angular/core';
import { AComponent } from './acomponent/acomponent';
import { BComponent } from './bcomponent/bcomponent';
import { Common } from './common';

@Component({
  selector: 'app-service-shared',
  imports: [AComponent, BComponent],
  templateUrl: './service-shared.html',
  styleUrl: './service-shared.css',
})
export class ServiceShared {

}
