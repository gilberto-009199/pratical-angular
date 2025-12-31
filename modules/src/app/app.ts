import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VendasModule } from './vendas/vendas-module';
import { TiModule } from './ti/ti-module';
import { LogisticaModule } from './logistica/logistica-module';

@Component({
  selector: 'app-root',
  imports: [VendasModule, TiModule, LogisticaModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('modules');
}
