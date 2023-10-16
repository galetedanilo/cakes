import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMessageCardModel } from '../../models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-message-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './message-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageCardComponent {
  @Input({ required: true }) data!: IMessageCardModel;
  @Input({ required: true }) isReverse = false;
}
