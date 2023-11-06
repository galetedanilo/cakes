import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';

import { IProductModel } from '../../models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, ButtonModule, CardModule, RatingModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input({ required: true }) data!: IProductModel;
  @Output() isSelected = new EventEmitter<string | null>();
}
