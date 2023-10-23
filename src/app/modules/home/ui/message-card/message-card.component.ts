import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { IMessageModel } from '../../models';

@Component({
  selector: 'app-message-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './message-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageCardComponent {
  @Input({ required: true }) data!: IMessageModel;
  @Input({ required: true }) isReverse = false;
}
