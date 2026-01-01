import { Injectable } from '@angular/core';
import { SistemaService } from '../ti/sistema-service';

@Injectable()
export class CatalogoService {
  
    constructor(
        private sistemaService: SistemaService
    ){}

    
}
