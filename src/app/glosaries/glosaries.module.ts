import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlosariesPageRoutingModule } from './glosaries-routing.module';

import { GlosariesPage } from './glosaries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlosariesPageRoutingModule
  ],
  declarations: [GlosariesPage]
})
export class GlosariesPageModule {}
