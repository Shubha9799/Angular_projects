import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  myobs!: Observable<number>;
  myobs$: any;
  constructor() { }

  ngOnInit(): void {
   // interval(1000).subscribe(val=>console.log(`I am observable stream value--> ${val}`));
  
  this.myobs$=of(1,2,4,5,10,100);
  this.myobs$.subscribe(
    (val:Number)=>console.log(`I am observable stream value--> ${val}`)
  )
  from ([1,2,10,20]).subscribe((val:Number)=>console.log(`I am from-->obs stream value-->${val}`)
  )
  }
  ngOnDestroy():void{
    console.log('from destroy');
    this.myobs$?.unscribe();
    this.myobs$.unscribe();
  }

}
