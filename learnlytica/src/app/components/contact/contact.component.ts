import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  langs = ['ENG', "HIND", 'TELGU', 'KANDA'];

  myform : FormGroup = new FormGroup(
    {
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    lang: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }
  getValues() {
    console.log(this.myform);
  }

}
