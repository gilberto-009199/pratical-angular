import { Injectable } from '@angular/core';
import { EstoqueService } from '../logistica/estoque-service';

@Injectable()
export class SistemaService {

  constructor(
    private estoqueService: EstoqueService
  ){}
  
}
