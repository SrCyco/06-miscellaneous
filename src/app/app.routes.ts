import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';





const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'user/:id',
        component: UsuarioComponent,
        children: USUARIO_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const routing = RouterModule.forRoot(routes);
