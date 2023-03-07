import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanastPage } from './canast.page';

const routes: Routes = [
  {
    path: '',
    component: CanastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanastPageRoutingModule {}
