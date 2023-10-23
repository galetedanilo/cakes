import { Injectable } from '@angular/core';
import { AHomeServiceClass } from '../home-service.class';
import { Observable } from 'rxjs';

import { AHttpServiceClass } from 'src/app/core';

import {
  IProductModel,
  IMessageModel,
  IProfferModel,
  IReviewModel,
} from '../../models';

@Injectable()
export class HomeService
  extends AHttpServiceClass
  implements AHomeServiceClass
{
  getPromotions(): Observable<IProductModel[]> {
    return this.http.get<IProductModel[]>(`${this.api}/promotions`);
  }

  getBests(): Observable<IProductModel[]> {
    return this.http.get<IProductModel[]>(`${this.api}/bests`);
  }

  getMessages(): Observable<IMessageModel[]> {
    return this.http.get<IMessageModel[]>(`${this.api}/messages`);
  }

  getProffers(): Observable<IProfferModel[]> {
    return this.http.get<IProfferModel[]>(`${this.api}/proffers`);
  }

  getReviews(): Observable<IReviewModel[]> {
    return this.http.get<IReviewModel[]>(`${this.api}/reviews`);
  }
}
