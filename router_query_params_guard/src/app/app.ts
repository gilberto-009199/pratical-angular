import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterModule, RouterLink, RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  definirToken(){
    localStorage.setItem('token', 'asdad')
  }

  apagarToken(){
    localStorage.removeItem('token')
  }

}
