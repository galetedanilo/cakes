import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  IProductModel,
  IMessageModel,
  IProfferModel,
  IReviewModel,
} from '../models';

export const homeActions = createActionGroup({
  source: 'Home Page',
  events: {
    enterPage: emptyProps(),
    loadBests: emptyProps(),
    loadBestsSuccess: props<{ bests: IProductModel[] }>(),
    loadBestsFailed: emptyProps(),
    loadMessages: emptyProps(),
    loadMessagesSuccess: props<{ messages: IMessageModel[] }>(),
    loadMessagesFailed: emptyProps(),
    loadProffers: emptyProps(),
    loadProffersSuccess: props<{ proffers: IProfferModel[] }>(),
    loadProfferFailed: emptyProps(),
    loadPromotions: emptyProps(),
    loadPromotionsSuccess: props<{
      promotions: IProductModel[];
    }>(),
    loadPromotionsFailed: emptyProps(),
    loadReviews: emptyProps(),
    loadReviewsSuccess: props<{ reviews: IReviewModel[] }>(),
    loadReviewsFailed: emptyProps(),
    selectProductId: props<{ id: string | null}>(),
  },
});
