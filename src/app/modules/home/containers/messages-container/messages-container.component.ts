import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IMessageModel } from '../../models';
import { MessageCardComponent } from '../../ui';

@Component({
  selector: 'app-messages-container',
  standalone: true,
  imports: [CommonModule, MessageCardComponent],
  templateUrl: './messages-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesContainerComponent {
  @Input({ required: true }) data!: IMessageModel[];
  color = 'read';
}
