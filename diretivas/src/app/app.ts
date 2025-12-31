import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Uppercase } from "./uppercase";
import { Antkkk } from "./antkkk";
import { Telefone } from './telefone';
import { AuthService } from './auth-service';
import { HasRole } from './has-role';

@Component({
  selector: 'app-root',
  imports: [Uppercase, Antkkk, Telefone, HasRole],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  constructor(
    private authService: AuthService
  ) { }


  setUsuarioComum(){
    this.authService.usuario.update(user => ({
      ...user,
      role:['USER']
    }))
  }

  setUsuarioADMIN(){
    this.authService.usuario.update(user => ({
      ...user,
      role:['ADMIN', 'USER']
    }))
  }

  resetUsuario(){
    this.authService.usuario.update(user => ({
      ...user,
      role:[]
    }))
  }
}
