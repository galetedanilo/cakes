import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-proffer-card',
  standalone: true,
  templateUrl: './proffer-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfferCardComponent {}
