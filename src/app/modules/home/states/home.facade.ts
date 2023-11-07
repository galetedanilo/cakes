import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { homeFeature } from './home.feature';
import { homeActions } from './home.actions';

@Injectable()
export class HomeFacade {
  #store = inject(Store);

  get promotionsSignal() {
    return this.#store.selectSignal(homeFeature.selectAll);
  }

  get bestsSignal() {
    return this.#store.selectSignal(homeFeature.selectBests);
  }

  get messagesSignal() {
    return this.#store.selectSignal(homeFeature.selectMessages);
  }

  get proffersSignal() {
    return this.#store.selectSignal(homeFeature.selectProffers);
  }

  get reviewsSignal() {
    return this.#store.selectSignal(homeFeature.selectReviews);
  }

  get selectedProduct() {
    return this.#store.selectSignal(homeFeature.selectSelectedProduct);
  }

  set selectProductId(id: string | null) {
    this.#store.dispatch(homeActions.selectProductId({ id }))
  }

  enterPage() {
    this.#store.dispatch(homeActions.enterPage());
  }
}
