import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CakesComponent } from './home.component';

describe('CakesComponent', () => {
  let component: CakesComponent;
  let fixture: ComponentFixture<CakesComponent>;
  let page: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CakesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesComponent);
    component = fixture.componentInstance;

    page = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });
});
