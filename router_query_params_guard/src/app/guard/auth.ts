import { inject } from '@angular/core';
import { Router } from '@angular/router';

// 1. Guarda de Autenticação (Qualquer usuário logado)
export const authGuard = () => {
  const router = inject(Router);
  const estaLogado = !!localStorage.getItem('token'); // Exemplo simples
  
  return estaLogado ? true : router.parseUrl('/produtos');
};
