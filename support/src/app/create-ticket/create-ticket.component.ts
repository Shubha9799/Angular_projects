import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  listLangs:string[]=['High','Medium','Low'];

  constructor() { }

  ngOnInit(): void {
  }

  getFormsValue(fval:any){
    console.log(fval)
 

  }
}
