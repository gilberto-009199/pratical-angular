import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemLogisticoComponent } from './sistem-logistico-component/sistem-logistico-component';



@NgModule({
  declarations: [ SistemLogisticoComponent ],
  imports: [
    CommonModule
  ],
  exports:[
    SistemLogisticoComponent
  ]
})
export class TiModule { }
