import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { tourTopics } from '../tours';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements DoCheck {
  items;
  sum;
  paySum;

  constructor(
    private cartService: CartService
  ) { }


// Function for getting items array and creating sum and displaying

ngDoCheck() {
  this.items = this.cartService.getItems();
  var sum = 0;
  this.items.forEach(function (tourTopics){
    sum = sum + tourTopics.price;
  });
  var paySum = 0;
  if (sum < 200) {
    // if paySum lower 200, % discount, displaying paySum//
    var paySum = sum;
    document.getElementById('total').innerHTML = 'Total: ' + paySum + '€';
  } else if (sum <= 499) {
    // else if paySum lower 499, 10% discount, displaying paySum and discount//
    var paySum = sum * 0.9;
    document.getElementById('total').innerHTML = 'Total: ' + paySum + '€';
    document.getElementById('discount').innerHTML = 'Discount: -10%';
  } else if (sum > 499) {
    // else if paySum greater 499, 20% discount, displaying paySum and discount//
    var paySum = sum * 0.8;
    document.getElementById('total').innerHTML = 'Total: ' + paySum + '€';
    document.getElementById('discount').innerHTML = 'Discount: -20%';
  }
}
}
