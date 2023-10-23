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

  proffers$ = createEffect(() => {
    return this.#actions.pipe(
      ofType(homeActions.loadProffers, homeActions.loadMessagesSuccess),
      exhaustMap(() =>
        this.#service.getProffers().pipe(
          map(proffers => homeActions.loadProffersSuccess({ proffers })),
          catchError(() => of(homeActions.loadProfferFailed))
        )
      )
    );
  });

  reviews$ = createEffect(() => {
    return this.#actions.pipe(
      ofType(homeActions.loadReviews, homeActions.loadProffersSuccess),
      exhaustMap(() =>
        this.#service.getReviews().pipe(
          map(reviews => homeActions.loadReviewsSuccess({ reviews })),
          catchError(() => of(homeActions.loadReviewsFailed))
        )
      )
    );
  });
}
