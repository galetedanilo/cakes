import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { IProfferModel } from '../../models/proffer.model';

@Component({
  selector: 'app-proffer-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './proffer-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfferCardComponent {
  @Input({ required: true }) data!: IProfferModel;
}
