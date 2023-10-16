import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageCardComponent } from '../message-card/message-card.component';
import { IMessageCardModel } from '../../models';

@Component({
  selector: 'app-messages-container',
  standalone: true,
  imports: [CommonModule, MessageCardComponent],
  templateUrl: './messages-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesContainerComponent {
  @Input({ required: true }) data!: IMessageCardModel[];
  color = 'read';
}
