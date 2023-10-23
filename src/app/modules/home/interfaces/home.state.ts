import { EntityState } from '@ngrx/entity';
import {
  IProductModel,
  IMessageModel,
  IProfferModel,
  IReviewModel,
} from '../models';

export interface IHomeState extends EntityState<IProductModel> {
  promotions: IProductModel[];
  bests: IProductModel[];
  messages: IMessageModel[];
  proffers: IProfferModel[];
  reviews: IReviewModel[];
  isLoading: boolean;
}
