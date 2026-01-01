import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueComponent } from './estoque-component/estoque-component';
import { EstoqueService } from './estoque-service';



@NgModule({
  declarations: [ EstoqueComponent ],
  providers:[
    EstoqueService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EstoqueComponent
  ]
})
export class LogisticaModule { }
