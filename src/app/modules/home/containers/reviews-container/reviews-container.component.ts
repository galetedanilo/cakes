import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IReviewModel } from '../../models';
import { ReviewCardComponent } from '../../ui';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reviews-container',
  standalone: true,
  imports: [NgFor, ReviewCardComponent],
  templateUrl: './reviews-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsContainerComponent {
  @Input({ required: true }) data!: IReviewModel[];
}
