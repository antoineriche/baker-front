import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-viewer',
  templateUrl: './restaurant-viewer.component.html',
  styleUrls: ['./restaurant-viewer.component.scss']
})
export class RestaurantViewerComponent implements OnInit {

  @Input()
  readonly restaurant: any;

  @Input()
  readonly restaurantCommandCount: number;

  constructor() { }

  ngOnInit() {
  }

}
