import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MessagesContainerComponent,
  ProductSlideComponent,
  ProfferCardComponent,
} from '../../ui';
import { HomeFacade } from '../../states';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MessagesContainerComponent,
    ProductSlideComponent,
    ProfferCardComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected facade = inject(HomeFacade);
}
