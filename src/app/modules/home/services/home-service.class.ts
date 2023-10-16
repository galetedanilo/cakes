import { Observable } from 'rxjs';
import { IProductCardModel, IMessageCardModel } from '../models';

export abstract class AHomeServiceClass {
  abstract getPromotions(): Observable<IProductCardModel[]>;
  abstract getBests(): Observable<IProductCardModel[]>;
  abstract getMessages(): Observable<IMessageCardModel[]>;
}
