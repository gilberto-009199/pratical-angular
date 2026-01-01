import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemLogisticoComponent } from './sistem-logistico-component/sistem-logistico-component';
import { SistemaService } from './sistema-service';
import { LogisticaModule } from '../logistica/logistica-module';



@NgModule({
  declarations: [ SistemLogisticoComponent ],
  imports: [
    CommonModule,
    LogisticaModule
  ],
  providers:[
    SistemaService 
    // não é preciso colocar em exports,
    //  ao deixar aqui os outros modulos que importarem TiModule,
    //  recebem o Service
  ],
  exports:[
    SistemLogisticoComponent
  ]
})
export class TiModule { }
