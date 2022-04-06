import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseTitle = 'Git as Devops tool';
  currentDate = new Date();

  courseDetails = {
    title:'Git for beginner',
    price: 1499
  }
  items=[{
    title:'Devops automation implementation',
    price: 1399,
    img:'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aa193f0cf272b4d2eef49a/61aa193f0cf272b4d2eef49a_scaled_cover.jpg?v=1'
  },
  {
    title:'Chef as a DevOp tool',
    price:1399,
    img:'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aaffed0cf2a71c5139fc7c/61aaffed0cf2a71c5139fc7c_scaled_cover.jpg?v=1'
  },
  {
    title:'Using Jenkins for DevOps',
    price:1499,
    img:'https://dz8fbjd9gwp2s.cloudfront.net/courses/61ab04c30cf272041d78452f/61ab04c30cf272041d78452f_scaled_cover.jpg?v=1'
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
