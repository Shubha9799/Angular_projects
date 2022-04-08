import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private myhttp:HttpClient) { }
  getCourseConfig()
  {
    return this.myhttp.get('https://httpstat.us/200');
  }

  getCourseList()
  {
    return this.myhttp.get('assets/mock-data/course-list.json');
  }
}
