import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {
  @Input() configList:any;
  @Input() ageconfig:any;

  constructor() { }

  ngOnInit(): void {
    alert(this.configList);
    alert(this.ageconfig);
  }

}
