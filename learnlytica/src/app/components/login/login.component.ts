import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform1 : FormGroup = new FormGroup(
    {
    Uname: new FormControl(),  
    password: new FormControl()
    
  });
  constructor() { }

  ngOnInit(): void {
  }
  getValues() {
    console.log(this.myform1);
  }

}
