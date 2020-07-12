import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarEmpleoPageRoutingModule } from './actualizar-empleo-routing.module';

import { ActualizarEmpleoPage } from './actualizar-empleo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarEmpleoPageRoutingModule
  ],
  declarations: [ActualizarEmpleoPage]
})
export class ActualizarEmpleoPageModule {}
