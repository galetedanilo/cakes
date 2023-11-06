import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IReviewModel } from '../../models';
import { ReviewCardComponent, ReviewCardSkelentonComponent } from '../../ui';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-reviews-container',
  standalone: true,
  imports: [NgFor, NgIf, ReviewCardComponent, ReviewCardSkelentonComponent],
  templateUrl: './reviews-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsContainerComponent {
  @Input({ required: true }) data!: IReviewModel[] | null;
}
