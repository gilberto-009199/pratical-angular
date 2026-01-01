import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo-component/catalogo-component';
import { CatalogoService } from './catalogo-service';
import { TiModule } from '../ti/ti-module';



@NgModule({
  declarations: [
    CatalogoComponent
  ],
  imports: [
    CommonModule,
    TiModule
  ],
  providers:[
    CatalogoService
  ],
  exports:[
    CatalogoComponent
  ]
})
export class VendasModule { }
