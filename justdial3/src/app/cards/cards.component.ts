import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  item=[{
    title:'Restaurants',
    list1:'Order online',
    list2:'Book table',
    list3:'Trending',
    list4:'more..',
    img:'../../assets/images/restaurant.jpg'
  },
  {
    title:'Shop online',
    list1:'Mobile',
    list2:'Laptop',
    list3:'Television',
    list4:'more..',
    img:'../../assets/images/download (1).jpg'
  },
  {
    title:'Daily needs',
    list1:'Grocery',
    list2:'Chemist',
    list3:'Bakery',
    list4:'more..',
    img:'../../assets/images/daily_needs.jpg'
  },
  {
    title:'Doctor',
    list1:'Dentist',
    list2:'ENT',
    list3:'Dermatologist',
    list4:'more..',
    img:'../../assets/images/download (2).jpg'
  }
];

  cardsitem=[{
    title:'Travel',
    list1:'Flight',
    list2:'Bus',
    list3:'Hotels',
    list4:'more..',
    img:'../../assets/images/travel.jpg'
  },
  {
    title:'Repairs',
    list1:'AC',
    list2:'Laptop',
    list3:'Mobile',
    list4:'more..',
    img:'../../assets/images/repairs.jpg'
  },
  {
    title:'Loans',
    list1:'Credit card',
    list2:'Home loan',
    list3:'Personal loan',
    list4:'more..',
    img:'../../assets/images/loans.jpg'
  },
  {
    title:'Automobile',
    list1:'New car',
    list2:'Used car',
    list3:'Insurance',
    list4:'more..',
    img:'../../assets/images/automobile.jpg'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
