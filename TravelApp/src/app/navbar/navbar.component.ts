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

  ngDoCheck() {
    this.numberOfItems = this.cartService.getLenght();
  }
}
