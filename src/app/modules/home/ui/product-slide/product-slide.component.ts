import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { IProductCardModel } from '../../models';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-slide',
  standalone: true,
  imports: [CarouselModule, ProductCardComponent],
  templateUrl: './product-slide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSlideComponent {
  @Input({ required: true }) items!: IProductCardModel[];
  @Input({ required: true }) title!: string;

  protected responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1200px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '992px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
