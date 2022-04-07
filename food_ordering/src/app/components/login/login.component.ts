import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform : FormGroup = new FormGroup(
    {
    name: new FormControl(),  
    phone: new FormControl()
    
  });
  constructor() { }

  ngOnInit(): void {
  }
  getValues() {
    console.log(this.myform);
  }

}
