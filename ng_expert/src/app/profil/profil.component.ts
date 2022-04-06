import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  @Input() labels:any;
  @Input() profilconfig:any;
  constructor() { }

  ngOnInit(): void {
    alert(this.labels);
    alert(this.profilconfig);
  }

}
