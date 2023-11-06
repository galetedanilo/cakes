import { EntityState } from '@ngrx/entity';
import {
  IProductModel,
  IMessageModel,
  IProfferModel,
  IReviewModel,
} from '../models';

export interface IHomeState extends EntityState<IProductModel> {
  bests: IProductModel[];
  messages: IMessageModel[];
  proffers: IProfferModel[];
  reviews: IReviewModel[] | null;
  selected: string | null;
  isLoading: boolean;
}
