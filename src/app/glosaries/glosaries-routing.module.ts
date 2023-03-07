import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlosariesPage } from './glosaries.page';

const routes: Routes = [
  {
    path: '',
    component: GlosariesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlosariesPageRoutingModule {}
