import { EntityState } from '@ngrx/entity';
import { IProductCardModel, IMessageCardModel } from '../models';

export interface IHomeState extends EntityState<IProductCardModel> {
  promotions: IProductCardModel[];
  bests: IProductCardModel[];
  messages: IMessageCardModel[];
  isLoading: boolean;
}
