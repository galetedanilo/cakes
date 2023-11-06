import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MessageCardComponent } from './message-card.component'
import { ChangeDetectionStrategy } from '@angular/compiler';

describe('MessageCardComponent', () => {
  let component: MessageCardComponent;
  let fixture: ComponentFixture<MessageCardComponent>;
  let page: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageCardComponent],
    })
    .overrideComponent(MessageCardComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  });
})
