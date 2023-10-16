import { Injectable, inject } from '@angular/core';
import { AHomeServiceClass } from '../services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { homeActions } from './home.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class HomeEffect {
  #service = inject(AHomeServiceClass);
  #actions = inject(Actions);

  promotions$ = createEffect(() => {
    return this.#actions.pipe(
      ofType(homeActions.enterPage, homeActions.loadPromotions),
      exhaustMap(() =>
        this.#service.getPromotions().pipe(
          map(promotions => homeActions.loadPromotionsSuccess({ promotions })),
          catchError(() => of(homeActions.loadPromotionsFailed()))
        )
      )
    );
  });

  bests$ = createEffect(() => {
    return this.#actions.pipe(
      ofType(homeActions.loadBests, homeActions.loadPromotionsSuccess),
      exhaustMap(() =>
        this.#service.getBests().pipe(
          map(bests => homeActions.loadBestsSuccess({ bests })),
          catchError(() => of(homeActions.loadBestsFailed()))
        )
      )
    );
  });

  messages$ = createEffect(() => {
    return this.#actions.pipe(
      ofType(homeActions.loadMessages, homeActions.loadBestsSuccess),
      exhaustMap(() =>
        this.#service.getMessages().pipe(
          map(messages => homeActions.loadMessagesSuccess({ messages })),
          catchError(() => of(homeActions.loadMessagesFailed))
        )
      )
    );
  });
}
