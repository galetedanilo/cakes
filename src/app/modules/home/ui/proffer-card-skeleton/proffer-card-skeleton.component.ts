import { Component } from '@angular/core';

import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-proffer-card-skeleton',
  standalone: true,
  imports: [SkeletonModule],
  templateUrl: './proffer-card-skeleton.component.html',
})
export class ProfferCardSkeletonComponent {}
