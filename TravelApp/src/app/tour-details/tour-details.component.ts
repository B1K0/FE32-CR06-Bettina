import { Component, OnInit } from '@angular/core';
import { tourTopics} from '../tours';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
tours = tourTopics;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  // imported addToCart function from cart.services.ts & added alert
  addToCart(tour) {
    window.alert('Yay - the tour has been added to your cart!');
    this.cartService.addToCart(tour);
  }
  ngOnInit(): void {
  }

}
