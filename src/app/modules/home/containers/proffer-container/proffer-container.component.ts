import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import { IProfferModel } from '../../models';
import { ProfferCardComponent } from '../../ui';

@Component({
  selector: 'app-proffer-container',
  standalone: true,
  imports: [NgFor, ProfferCardComponent],
  templateUrl: './proffer-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfferContainerComponent {
  @Input({ required: true }) data!: IProfferModel[];
}
