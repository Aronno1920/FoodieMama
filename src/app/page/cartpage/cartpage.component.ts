import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart-service';
import { FoodService } from '../../services/food.service';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';
import { NotfoundComponent } from '../notfound/notfound.component';

@Component({
  selector: 'app-cartpage',
  standalone: true,
  imports: [CommonModule, RouterModule, NotfoundComponent],
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.css',
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(
    private cartService: CartService
  ) {
    this.setCart();
  }

  ngOnInit(): void {
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    console.log(cartItem);
    console.log(quantityInString);

    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
