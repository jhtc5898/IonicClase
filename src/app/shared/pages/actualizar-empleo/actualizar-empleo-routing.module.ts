import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarEmpleoPage } from './actualizar-empleo.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarEmpleoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarEmpleoPageRoutingModule {}
