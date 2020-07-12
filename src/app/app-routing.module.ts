import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-empleos',
    loadChildren: () => import('./shared/pages/lista-empleos/lista-empleos.module').then( m => m.ListaEmpleosPageModule)
  },
  {
    path: 'empleo',
    loadChildren: () => import('./empleo/empleo.module').then( m => m.EmpleoPageModule)
  },
  {
    path: 'empleo/:id',
    loadChildren: () => import('./empleo/empleo.module').then( m => m.EmpleoPageModule)
  },
  {
    path: 'crear-empleo',
    loadChildren: () => import('./shared/pages/crear-empleo/crear-empleo.module').then( m => m.CrearEmpleoPageModule)
  },
  {
    path: 'actualizar-empleo',
    loadChildren: () => import('./shared/pages/actualizar-empleo/actualizar-empleo.module').then( m => m.ActualizarEmpleoPageModule)
  },
  {
    path: 'actualizar-empleo/:id',
    loadChildren: () => import('./shared/pages/actualizar-empleo/actualizar-empleo.module').then( m => m.ActualizarEmpleoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
