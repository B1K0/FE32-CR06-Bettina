import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { tourTopics } from '../tours';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tours = tourTopics;
  numberOfItems;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {}
  
// imported function from cart.services.ts to show items number in navbar
  ngDoCheck() {
    this.numberOfItems = this.cartService.getLenght();
  }
}
