import { Component, inject, input, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../produto-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  imports: [ReactiveFormsModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto implements OnInit{
  
  // para usar isso coloque withComponentInputBinding em 
  // export const appConfig: ApplicationConfig = {
  //   providers: [
  //       provideRouter(routes, withComponentInputBinding()) 
  //   ]
  // };

  id = input<string>();
  
  frmProduto:FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router
  ){
    this.frmProduto = this.fb.group({
      'nome': [ '', Validators.required ],
      'preco': [ '', Validators.required ],
    })
  }


  ngOnInit(){
    
    let produto = this.produtoService.produtos()[Number(this.id())]
    
    this.frmProduto.setValue({
      nome: produto.nome,
      preco: produto.preco
    })

  }


  salvar(){
    let produto = this.frmProduto.getRawValue();

    this.produtoService.produtos.update(produtos => {
      
      produtos[Number(this.id())] = {
        id: Number(this.id()),
        nome: produto.nome,
        preco: produto.preco
      };

      return produtos;
    })

    this.router.navigate(['produtos'])
  }

}
