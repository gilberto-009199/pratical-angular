import { Component, inject, input, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario implements OnInit{
  
  // para usar isso coloque withComponentInputBinding em 
  // export const appConfig: ApplicationConfig = {
  //   providers: [
  //       provideRouter(routes, withComponentInputBinding()) 
  //   ]
  // };

  id = input<string>();
  
  frmUsuario:FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    private router: Router,
    private route : ActivatedRoute
  ){
    this.frmUsuario = this.fb.group({
      'nome': [ '', Validators.required ],
      'sobrenome': [ '', Validators.required ],
    })
  }


  ngOnInit(){
    // usando query parameters para pegar os dados do ussuario
    // n funciona em objetos complexos
    let dados = this.route.snapshot.queryParams;

    let usuario = dados ? dados : this.usuarioService.usuarios()[Number(this.id())]
    
    this.frmUsuario.setValue({
      ...usuario
    })

    this.route.queryParams.subscribe(params => {
      console.log('Todos os parâmetros atuais:', params);
    });

  }


  salvar(){
    let usuario = this.frmUsuario.getRawValue();

    this.usuarioService.usuarios.update(usuarios => {
      
      usuarios[Number(this.id())] = usuario;

      return usuarios;
    })

    this.router.navigate(['usuarios'])
  }

}
