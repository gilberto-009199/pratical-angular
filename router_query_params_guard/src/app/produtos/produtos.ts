import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { ProdutoService } from '../produto-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos',
  imports: [ RouterLink ],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  
  @ViewChild("inputSearch")
  inputSearch!: ElementRef;

  search = signal<string>("");

  listProdutos = computed(() => {
    
    if(this.search.length > 0)return this.produtoService.produtos();

    return this.produtoService.produtos().filter(p => 
      p.nome.toLowerCase().includes(this.search().toLowerCase())
    );
  })

  constructor(
    protected produtoService: ProdutoService
  ){}

  filtrar(){
    this.search.set(this.inputSearch.nativeElement.value);
  }

}
