import { Component } from '@angular/core';
import { CatalogoService } from '../catalogo-service';

@Component({
  selector: 'app-catalogo-component',
  standalone: false,
  templateUrl: './catalogo-component.html',
  styleUrl: './catalogo-component.css',
})
export class CatalogoComponent {

  constructor(
    private catalogoService: CatalogoService
  ){}

  
}
