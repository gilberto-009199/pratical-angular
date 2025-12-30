import { Injectable, signal } from '@angular/core';


interface Produto{
  id: number,
  nome : string,
  preco : number
}

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  public produtos = signal<Produto[]>([
    {
      id: 0,
      nome: "Memoria RAM 8GB DDR3",
      preco: 300
    },
    {
      id: 1,
      nome: "Memoria RAM 16GB DDR4",
      preco: 400
    },
    {
      id: 2,
      nome: "AMD 5 RADEON",
      preco: 180
    },
    {
      id: 3,
      nome: "Intel i5 7 geracao",
      preco: 150
    },
    {
      id: 4,
      nome: "Intel i3 5 geracao",
      preco: 130
    },
    {
      id: 5,
      nome: "Snap Dragon",
      preco: 120
    },
    {
      id: 6,
      nome: "Intel i7 10 geracao",
      preco: 260
    }
  ])
}
