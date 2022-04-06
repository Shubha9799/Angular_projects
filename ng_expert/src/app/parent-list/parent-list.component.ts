import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {
  data='Parent-child communication';
  agedata=2022;

  constructor() { }

  ngOnInit(): void {
  }

}
