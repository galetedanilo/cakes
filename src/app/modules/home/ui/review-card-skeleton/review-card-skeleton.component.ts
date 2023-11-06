import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
    selector: 'app-review-card-skeleton',
    standalone: true,
    imports: [SkeletonModule],
    templateUrl: './review-card-skeleton.component.html',
})
export class ReviewCardSkelentonComponent {}
