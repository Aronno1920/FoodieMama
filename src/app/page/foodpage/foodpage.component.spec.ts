import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodPageComponent } from './foodpage.component';

describe('FoodPageComponent', () => {
  let component: FoodPageComponent;
  let fixture: ComponentFixture<FoodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
