import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProdutos } from './lista-produtos/lista-produtos';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ListaProdutos, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('skeleton');
  isLoading = true


  ngOnInit(): void {
      setTimeout(()=>{
        this.isLoading = false
      }, 10)
  }
}
