import { Observable } from 'rxjs';
import {
  IProductModel,
  IMessageModel,
  IProfferModel,
  IReviewModel,
} from '../models';

export abstract class AHomeServiceClass {
  abstract getPromotions(): Observable<IProductModel[]>;
  abstract getBests(): Observable<IProductModel[]>;
  abstract getMessages(): Observable<IMessageModel[]>;
  abstract getProffers(): Observable<IProfferModel[]>;
  abstract getReviews(): Observable<IReviewModel[]>;
}
