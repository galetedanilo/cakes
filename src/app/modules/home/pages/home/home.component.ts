import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { HomeFacade } from '../../states';
import { CommonModule } from '@angular/common';

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
}
