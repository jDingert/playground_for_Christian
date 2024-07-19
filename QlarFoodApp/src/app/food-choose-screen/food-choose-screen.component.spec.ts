import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodChooseScreenComponent } from './food-choose-screen.component';

describe('FoodChooseScreenComponent', () => {
  let component: FoodChooseScreenComponent;
  let fixture: ComponentFixture<FoodChooseScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodChooseScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodChooseScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
