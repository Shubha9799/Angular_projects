import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-info',
  templateUrl: './parent-info.component.html',
  styleUrls: ['./parent-info.component.css']
})
export class ParentInfoComponent implements OnInit {
  data=[{name:'Shubha',place:'Belgaum',Company:'THBS'}]
  number=9876543210;
  child:any;
  constructor() { }

  ngOnInit(): void {
  }
  receive(val:string){
    this.child=val;
  }

}
