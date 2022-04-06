import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  cmpy=[
    {
      "batch":99,
      "training":"Mean/mern",
      "company":"THBS"
    },
    {
      "batch":98,
      "training":"API",
      "company":"TCS"
    },
    {
      "batch":97,
      "training":"Devops",
      "company":"IBM"
    }
  ];

  getColors(code:string){
    switch(code){
      case 'Mean/mern': return 'red';
      break;
      case 'API':return 'blue';
      break;
      case 'Devops':return 'green';
      break;
      default:return 'yellow';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
