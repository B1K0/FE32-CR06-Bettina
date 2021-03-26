import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  sum: number;

  constructor() {}

// Create function to add to Cart 
addToCart(tour) {
  this.items.push(tour);
}
getItems() {
  return this.items;
}

// Create function to clear cart 
clearCart() {
  this.items = [];
  return this.items;
}
 // Create function to show number of items in cart
getLenght() {
  return this.items.length;
}


}
