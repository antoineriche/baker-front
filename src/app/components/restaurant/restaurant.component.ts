import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../../models/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  restaurants: IRestaurant[] = [];
  restaurant: IRestaurant;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  /* Retrieve restaurants from WS */
  private getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(
      data => this.restaurants = data,
      err =>  console.error('error', err)
    );
  }

  /* Retrieve one restaurant*/
  private getRestaurant(restaurantId: number) {
    this.restaurantService.getRestaurantById(restaurantId).subscribe(
      data => {
        console.log('restaurant', data);
        this.restaurant = data;
      }, 
      err => console.error('error', err)
    );
  }

}
