import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.routes').then(r => r.HOME_ROUTES),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./modules/manager/manager.routes').then(r => r.MANAGER_ROUTES),
  },
];
