import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRestaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private uri = 'http://localhost:8080/baker/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<IRestaurant[]> {
    return <Observable<any[]>> this.http.get(this.uri);
  }

  saveRestaurant(restaurant: IRestaurant): Observable<IRestaurant> {
    return <Observable<IRestaurant>> this.http.post(this.uri, restaurant);
  }

  getRestaurantById(restaurantId: number): Observable<IRestaurant> {
    return <Observable<IRestaurant>> this.http.get(this.uri + '/' + restaurantId);
  }
}
