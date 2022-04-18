import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZomatoserviceService } from 'src/app/zomatoservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id!: number;
  reviewList: any;
  list: any = [];
  cities: any;
  loading: boolean | undefined;
  selectedCityName: string ="";
  cityName: string ="";
  restoName: string = "";
  selectedRestoName: any;
  searchRestoList: any;
  restoId!: string;
  responseRestaurant: any;

  constructor(private foodservice: ZomatoserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.cities = this.foodservice.cities;
    this.getRestoDetail();
  }

  async getRestoDetail() {
    const id = + Number(this.route.snapshot.paramMap.get('id'))
    console.log(id);
    this. responseRestaurant.getRestaurantDetail(restoId).subscribe(
      (data: any) => {
        this.reviewList = data;
      },
      (error: any) => {
        this.router.navigate(['**']);
      }
    );
    this.responseRestaurant.getReview(restoId).subscribe(
      (        data: any) => {
          this.reviewList = Object.assign(data, this.reviewList);
          this.list.push(this.reviewList);
          
        },
      (        error: any) => {
          this.router.navigate(['**']);
        }
      );
  }


}
function restoId(restoId: any) {
  throw new Error('Function not implemented.');
}

