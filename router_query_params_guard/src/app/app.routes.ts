import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { authGuard } from './guard/auth'
import { Usuarios } from './usuarios/usuarios';
import { Produtos } from './produtos/produtos';
import { Usuario } from './usuarios/usuario/usuario';
import { Produto } from './produtos/produto/produto';

export const routes: Routes = [
    // não use / deixe o router do angular colocar isso
    { 
        path: 'usuarios',
        canActivate: [authGuard],
        component: Usuarios
    },
    { 
        path: 'usuarios/:id',
        canActivate: [authGuard],
        component: Usuario
    },
    { 
        path: 'produtos',
        component: Produtos
    },
    { 
        path: 'produtos/:id',
        component: Produto
    },
    {
        path: '*',
        redirectTo: 'produtos'
    }
];
