import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeHeading= "Join us for an unforgettable adventure"
  homeDescription = "We are commited to offer you high-end services in top locations, to make your vacation a once-in-a-lifetime event"

  constructor() { }

  ngOnInit(): void {
  }

}
