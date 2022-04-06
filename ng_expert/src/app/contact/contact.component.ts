import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() sendmsg=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.sendmsg.emit({
      courseName:'MEAN',
      start_date:'12-12-2021'
    });
  }

}
