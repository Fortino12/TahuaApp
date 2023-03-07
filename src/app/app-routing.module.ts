import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//importamos
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'slide',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard', canActivate: [AuthGuard] ,//agregar el guard
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'product/:id', canActivate: [AuthGuard] ,
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'glosaries',
    loadChildren: () => import('./glosaries/glosaries.module').then( m => m.GlosariesPageModule)
  },
  {
    path: 'glosary/:id',
    loadChildren: () => import('./glosary/glosary.module').then( m => m.GlosaryPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'direction',canActivate: [AuthGuard] ,
    loadChildren: () => import('./direction/direction.module').then( m => m.DirectionPageModule)
  },
  {
    path: 'canast/:id',
    loadChildren: () => import('./canast/canast.module').then( m => m.CanastPageModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
