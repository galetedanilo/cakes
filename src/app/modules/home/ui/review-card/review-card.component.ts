import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IReviewModel } from '../../models';

@Component({
  selector: 'app-review-card',
  standalone: true,
  templateUrl: './review-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent {
  @Input({ required: true }) data!: IReviewModel;
}
