import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-info',
  templateUrl: './child-info.component.html',
  styleUrls: ['./child-info.component.css']
})
export class ChildInfoComponent implements OnInit {
  @Input() list:any;
  @Input() phone:any;
  @Output()sendmsg=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    //alert(this.list);
    //alert(this.phone);
    this.sendmsg.emit({
      job:'Software Engg.',
      job_component:'full-stack'
    });
  }

}
