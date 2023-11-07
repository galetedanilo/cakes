import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';

import { HomeFacade } from '../../states';

import {
  MessagesContainerComponent,
  ProfferContainerComponent,
  ReviewsContainerComponent,
  SlideContainerComponent,
} from '../../containers';
import { ProductDetailsComponent } from '../../ui';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    MessagesContainerComponent,
    ProfferContainerComponent,
    SlideContainerComponent,
    ReviewsContainerComponent,
    ProductDetailsComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected facade = inject(HomeFacade);

  protected isVisible = false;

  constructor() {
    effect(() => (this.isVisible = !!this.facade.selectedProduct()));
  }
}
