import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { UsuariosService } from '../usuarios-service';

@Component({
  selector: 'app-usuarios',
  imports: [RouterLink],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  constructor(
    protected usuariosService: UsuariosService
  ){

  }
}
