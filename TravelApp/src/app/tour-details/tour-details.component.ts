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

  // add to Cart function from cart.service & alert 
  addToCart(tour) {
    window.alert('Yay - the tour has been added to the cart!');
    this.cartService.addToCart(tour);
  }
  ngOnInit(): void {
  }

}
