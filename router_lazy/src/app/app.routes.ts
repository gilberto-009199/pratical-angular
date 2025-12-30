import { Routes } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';

export const routes: Routes = [
    // não use / deixe o router do angular colocar isso
    { path: 'usuarios', component: Usuarios },
    { path: 'produtos', loadComponent: () => import('./produtos/produtos').then(m => m.Produtos) },
];
