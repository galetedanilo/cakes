import { Routes } from '@angular/router';

export const MANAGER_ROUTES: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        c => c.ProductsComponent
      ),
  },
];
