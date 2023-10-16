import { provideState } from '@ngrx/store';
import { homeFeature } from './home.feature';
import { provideEffects } from '@ngrx/effects';
import { HomeEffect } from './home.effects';

export { HomeFacade } from './home.facade';

export const PROVIDE_STATE = [
  provideState(homeFeature),
  provideEffects(HomeEffect),
];
