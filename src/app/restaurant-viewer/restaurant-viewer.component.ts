import { Component, OnInit, Input } from '@angular/core';
import { IRestaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant-viewer',
  templateUrl: './restaurant-viewer.component.html',
  styleUrls: ['./restaurant-viewer.component.scss']
})
export class RestaurantViewerComponent implements OnInit {

  @Input()
  readonly restaurant: IRestaurant;

  @Input()
  readonly restaurantCommandCount: number;

  constructor() { }

  ngOnInit() {
  }

}
