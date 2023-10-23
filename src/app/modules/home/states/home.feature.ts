import { createFeature, createReducer, on } from '@ngrx/store';
import { IHomeState } from '../interfaces';
import { createEntityAdapter } from '@ngrx/entity';
import { homeActions } from './home.actions';
import { IProductModel } from '../models';

const adapter = createEntityAdapter<IProductModel>();

const initialState: IHomeState = adapter.getInitialState({
  promotions: [],
  bests: [],
  messages: [],
  proffers: [],
  reviews: [],
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
    homeActions.loadProffers,
    (state): IHomeState => ({
      ...state,
      isLoading: true,
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
    homeActions.loadProffersSuccess,
    (state, action): IHomeState => ({
      ...state,
      isLoading: false,
      proffers: action.proffers,
    })
  ),
  on(
    homeActions.loadProfferFailed,
    (state): IHomeState => ({
      ...state,
      isLoading: false,
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
  ),
  on(
    homeActions.loadReviews,
    (state): IHomeState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    homeActions.loadReviewsSuccess,
    (state, action): IHomeState => ({
      ...state,
      reviews: action.reviews,
      isLoading: false,
    })
  ),
  on(
    homeActions.loadReviewsFailed,
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
