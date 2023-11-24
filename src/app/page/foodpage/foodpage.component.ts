import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { CartService } from '../../services/cart-service';
import { NotfoundComponent } from '../notfound/notfound.component'

@Component({
  selector: 'app-foodpage',
  standalone: true,
  imports: [CommonModule, NotfoundComponent],
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodPageComponent implements OnInit {

  food!: Food;

  constructor(private actRouter: ActivatedRoute,
    private fService: FoodService,
    private cartService: CartService,
    private router: Router) {
    actRouter.params.subscribe(params => {
      if (params['id'])
        this.food = fService.getFoodById(params['id']);
    })
  }

  ngOnInit(): void {

  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cartpage');
  }

}
