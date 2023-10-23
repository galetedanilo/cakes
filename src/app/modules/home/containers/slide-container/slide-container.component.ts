import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';

import { IProductModel } from '../../models';

import { ProductCardComponent } from '../../ui';

@Component({
  selector: 'app-slide-container',
  standalone: true,
  imports: [CarouselModule, ProductCardComponent],
  templateUrl: './slide-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideContainerComponent {
  @Input({ required: true }) data!: IProductModel[];
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
