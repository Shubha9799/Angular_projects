import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.css']
})
export class ProfilListComponent implements OnInit {
  array=['one','two','three'];
  details=[{name:'Shubha',age:23}];
  constructor() { }

  ngOnInit(): void {
  }

}
