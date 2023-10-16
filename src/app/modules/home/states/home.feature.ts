import { createFeature, createReducer, on } from '@ngrx/store';
import { IHomeState } from '../interfaces';
import { createEntityAdapter } from '@ngrx/entity';
import { homeActions } from './home.actions';
import { IProductCardModel } from '../models';

const adapter = createEntityAdapter<IProductCardModel>();

const initialState: IHomeState = adapter.getInitialState({
  promotions: [],
  bests: [],
  messages: [],
  isLoading: false,
});

const reducer = createReducer(
  initialState,
  on(
    homeActions.enterPage,
    (state): IHomeState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    homeActions.loadBests,
    (state): IHomeState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    homeActions.loadBestsSuccess,
    (state, action): IHomeState => ({
      ...state,
      bests: action.bests,
      isLoading: false,
    })
  ),
  on(
    homeActions.loadBestsFailed,
    (state): IHomeState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    homeActions.loadMessages,
    (state): IHomeState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    homeActions.loadMessagesSuccess,
    (state, action): IHomeState => ({
      ...state,
      messages: action.messages,
      isLoading: false,
    })
  ),
  on(
    homeActions.loadMessagesFailed,
    (state): IHomeState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    homeActions.loadPromotions,
    (state): IHomeState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    homeActions.loadPromotionsSuccess,
    (state, action): IHomeState => ({
      ...state,
      promotions: action.promotions,
      isLoading: false,
    })
  ),
  on(
    homeActions.loadPromotionsFailed,
    (state): IHomeState => ({
      ...state,
      isLoading: false,
    })
  )
);

export const homeFeature = createFeature({
  name: 'homeFeature',
  reducer,
  extraSelectors: ({ selectHomeFeatureState }) => ({
    ...adapter.getSelectors(selectHomeFeatureState),
  }),
});
