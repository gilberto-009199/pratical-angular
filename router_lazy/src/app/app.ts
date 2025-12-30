import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(
    private route: Router
  ){}
  
  irParaUsuario(){
    this.route.navigate(['/usuarios']);
  }

  irParaProdutos(){
    this.route.navigate(['/produtos']);
  }

}
