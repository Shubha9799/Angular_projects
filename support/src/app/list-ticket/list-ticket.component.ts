import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {
  Listticket: any;

  constructor(private mysrv:UserService) { }

  ngOnInit(): void {
    this.mysrv.getList().subscribe((result:any)=>{
      this.Listticket=result;
    })
  }

}
