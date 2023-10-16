import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IProductCardModel, IMessageCardModel } from '../models';

export const homeActions = createActionGroup({
  source: 'Home Page',
  events: {
    enterPage: emptyProps(),
    loadBests: emptyProps(),
    loadBestsSuccess: props<{ bests: IProductCardModel[] }>(),
    loadBestsFailed: emptyProps(),
    loadMessages: emptyProps(),
    loadMessagesSuccess: props<{ messages: IMessageCardModel[] }>(),
    loadMessagesFailed: emptyProps(),
    loadPromotions: emptyProps(),
    loadPromotionsSuccess: props<{
      promotions: IProductCardModel[];
    }>(),
    loadPromotionsFailed: emptyProps(),
  },
});
