import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { RatingModule } from 'primeng/rating';

import { IReviewModel } from '../../models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [FormsModule, RatingModule],
  templateUrl: './review-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent {
  @Input({ required: true }) data!: IReviewModel;
}
