import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  blogTopics = [
    {
      topic: "Sustainable Travel",
      text: "This is not only important for the health of our planet, but it’s also crucial for the well-being of the people and communities we visit and love around the world. And, it’s a path to deeper connections and having even better travel experiences.",
      img: "./assets/img/sustain.jpeg"
      
    }, {
      topic: "Foodie Tours",
      text: "Food and travel, one of life’s great experience intersections. Although we enjoy our share of refined cuisine and elaborate meals at restaurants, it’s often our street food quests around the world — raw on-the-ground journeys that convey authenticity — that yield some of life’s most revealing moments and enlighten us in unexpected ways.",
      img: "./assets/img/street-food.jpeg"
    }, {
      topic: "Traveling alone",
      text: "When you’re on vacation alone, the lack of familiar people to interact with forces you to engage much more directly with your surroundings—on where you are rather than who you’re with. This is probably why many travelers report more vivid memories from solo trips; their attention is absolutely focused on their surroundings.",
      img: "./assets/img/alone.jpeg"
    }
  ];

  ngOnInit(): void {
  }

}
