import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { RatingModule } from 'primeng/rating';

import { IReviewModel } from '../../models';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [FormsModule, DatePipe, NgStyle, RatingModule],
  templateUrl: './review-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent {
  @Input({ required: true }) data!: IReviewModel;
}
