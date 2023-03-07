import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanastPageRoutingModule } from './canast-routing.module';

import { CanastPage } from './canast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanastPageRoutingModule
  ],
  declarations: [CanastPage]
})
export class CanastPageModule {}
