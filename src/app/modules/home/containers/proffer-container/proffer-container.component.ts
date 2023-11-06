import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { IProfferModel } from '../../models';
import { ProfferCardComponent, ProfferCardSkeletonComponent } from '../../ui';

@Component({
  selector: 'app-proffer-container',
  standalone: true,
  imports: [NgFor, NgIf, ProfferCardComponent, ProfferCardSkeletonComponent],
  templateUrl: './proffer-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfferContainerComponent {
  @Input({ required: true }) data!: IProfferModel[];
}
