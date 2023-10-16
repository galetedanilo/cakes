import { Routes } from '@angular/router';
import { AHomeServiceClass, HomeService } from './services';
import { HomeFacade, PROVIDE_STATE } from './states';
import { inject } from '@angular/core';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    providers: [
      {
        provide: AHomeServiceClass,
        useClass: HomeService,
      },
      HomeFacade,
      PROVIDE_STATE,
    ],
    canActivate: [() => inject(HomeFacade).enterPage()],
    loadComponent: () =>
      import('./pages/home/home.component').then(c => c.HomeComponent),
  },
];
