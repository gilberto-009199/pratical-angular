import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from './translate-pipe';
import { TranslateService } from './translate-service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  hoje = Date.now();
  numero = 1999.523

  constructor(
    protected translateService: TranslateService
  ){}

}
