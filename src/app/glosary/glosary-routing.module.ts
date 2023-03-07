import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlosaryPage } from './glosary.page';

const routes: Routes = [
  {
    path: '',
    component: GlosaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlosaryPageRoutingModule {}
