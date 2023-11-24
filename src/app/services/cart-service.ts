import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);

    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }

  changeQuantity(quantity: number, foodId: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);

    if (cartItem) {
      cartItem.quantity = quantity;
    } else {
      console.log(`CartItem with foodId ${foodId} not found in the cart.`);
    }
  }

  getCart(): Cart {
    return this.cart;
  }
}
