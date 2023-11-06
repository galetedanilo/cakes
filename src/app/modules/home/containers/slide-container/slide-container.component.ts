import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';

import { IProductModel } from '../../models';

import { ProductCardComponent, ProductCardSkeletonComponent } from '../../ui';

@Component({
  selector: 'app-slide-container',
  standalone: true,
  imports: [
    NgIf,
    CarouselModule,
    ProductCardComponent,
    ProductCardSkeletonComponent,
  ],
  templateUrl: './slide-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideContainerComponent {
  @Input({ required: true }) data!: IProductModel[];
  @Input({ required: true }) title!: string;
  @Output() isSelected = new EventEmitter<string | null>();

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
