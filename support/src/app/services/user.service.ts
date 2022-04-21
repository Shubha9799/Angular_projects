import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private myhttp:HttpClient) { }
   //To connect to backend 
   getList() {

    return this.myhttp.get('http://localhost:4200/api/list') //obs
       
 
   }
}
