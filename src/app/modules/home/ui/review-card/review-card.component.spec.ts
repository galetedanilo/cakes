import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { ReviewCardComponent } from './review-card.component';
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

describe('ReviewCardComponent', () => {
  let component: ReviewCardComponent;
  let fixture: ComponentFixture<ReviewCardComponent>;
  let page: any;
  const pipe = new DatePipe('en-US');

  const date = new Date();

  const reviewModelMock = {
    id: '123',
    message: 'Review card message',
    stars: 4,
    date: date.toISOString(),
    user: {
      id: '456',
      name: 'Review card user name',
      imageUri: 'ReviewCardUserImageUri',
    },
    product: {
      id: '789',
      name: 'Review card product name',
      imageUri: 'ReviewCardProductImageUri',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewCardComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .overrideComponent(ReviewCardComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCardComponent);
    component = fixture.componentInstance;

    page = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when give input', () => {
    beforeEach(() => {
      component.data = reviewModelMock;
      fixture.detectChanges();
    });

    it('should username display', () => {
      const p: HTMLParagraphElement = page.querySelector(
        '[data-test=username]'
      );

      expect(p).toBeTruthy();
      expect(p.textContent?.trim()).toEqual(reviewModelMock.user.name);
    });

    it('should display user image', () => {
      const div: HTMLDivElement = page.querySelector('[data-test=user-image]');

      expect(div).toBeTruthy();
    });

    it('should message display', () => {
      const p: HTMLParagraphElement = page.querySelector('[data-test=message]');

      expect(p).toBeTruthy();
      expect(p.textContent?.trim()).toEqual(reviewModelMock.message);
    });

    it('should comment date display', () => {
      const p: HTMLParagraphElement = page.querySelector('[data-test=date]');

      expect(p).toBeTruthy();
      expect(p.textContent?.trim()).toEqual(
        pipe.transform(reviewModelMock.date, 'medium')
      );
    });

    it('should display product image', () => {
      const image: HTMLImageElement = page.querySelector(
        '[data-test=product-image]'
      );

      expect(image).toBeTruthy();
      expect(image.src.endsWith(reviewModelMock.product.imageUri)).toBeTruthy();
    });

    it('should product name display', () => {
      const p: HTMLParagraphElement = page.querySelector(
        '[data-test=product-name]'
      );

      expect(p).toBeTruthy();
      expect(p.textContent?.trim()).toEqual(reviewModelMock.product.name);
    });
  });
});
