import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlosaryPageRoutingModule } from './glosary-routing.module';

import { GlosaryPage } from './glosary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlosaryPageRoutingModule
  ],
  declarations: [GlosaryPage]
})
export class GlosaryPageModule {}
