import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myform1 : FormGroup = new FormGroup(
    {
    name: new FormControl(),  
    phone: new FormControl(),
    email:new FormControl(),
    city:new FormControl(),
    address:new FormControl(),
    zip:new FormControl()

    
  });
  constructor() { }

  ngOnInit(): void {
  }
  getValues()
  {
    console.log(this.myform1);
  }

}
