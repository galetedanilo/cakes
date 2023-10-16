import { Injectable } from '@angular/core';
import { AHomeServiceClass } from '../home-service.class';
import { Observable } from 'rxjs';
import { IProductCardModel, IMessageCardModel } from '../../models';
import { AHttpServiceClass } from 'src/app/core';

@Injectable()
export class HomeService
  extends AHttpServiceClass
  implements AHomeServiceClass
{
  getPromotions(): Observable<IProductCardModel[]> {
    return this.http.get<IProductCardModel[]>(`${this.api}/promotions`);
  }

  getBests(): Observable<IProductCardModel[]> {
    return this.http.get<IProductCardModel[]>(`${this.api}/bests`);
  }

  getMessages(): Observable<IMessageCardModel[]> {
    return this.http.get<IMessageCardModel[]>(`${this.api}/messages`);
  }
}
