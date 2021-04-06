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

  constructor(private cartService: CartService) { }


// Function to create sum and dispay total sum & discount

ngDoCheck() {
  this.items = this.cartService.getItems();
  var sum = 0;
  this.items.forEach(function (tour){
    sum = sum + parseInt(tour.price);
  });
  var paySum = 0;
  if (sum < 200) {
    // displaying paySum without discount//
    var paySum = sum;
    document.getElementById('total').innerHTML = 'Total: ' + paySum + '€';
  } else if (sum <= 499) {
    // else if for 10% discount
    var paySum = sum * 0.9;
    document.getElementById('total').innerHTML = 'Total: ' + paySum + '€';
    document.getElementById('discount').innerHTML = 'Discount: -10%';
  } else if (sum > 499) {
    // else if for 20% discount
    var paySum = sum * 0.8;
    document.getElementById('total').innerHTML = 'Total: ' + paySum + '€';
    document.getElementById('discount').innerHTML = 'Discount: -20%';
  }
}
onSubmit(items) {
  // on order Submit clear cart and display console & window alert//
  console.warn('Your order has been submitted');
  window.alert('Thank you for your purchase!');
  this.items = this.cartService.clearCart();
  document.getElementById('discount').innerHTML = '';
}
}
