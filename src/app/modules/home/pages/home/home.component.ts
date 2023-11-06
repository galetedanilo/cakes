import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';

import { HomeFacade } from '../../states';

import {
  MessagesContainerComponent,
  ProfferContainerComponent,
  ReviewsContainerComponent,
  SlideContainerComponent,
} from '../../containers';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    MessagesContainerComponent,
    ProfferContainerComponent,
    SlideContainerComponent,
    ReviewsContainerComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected facade = inject(HomeFacade);

  isSelected = true;

  constructor() {
    effect(() => {
      this.isSelected = !!this.facade.selectedProduct();
      console.log("Chamou")
    })
  }
}
