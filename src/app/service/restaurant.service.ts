import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private uri = 'http://localhost:8080/baker/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any[]> {
    return <Observable<any[]>> this.http.get(this.uri);
  }

  saveRestaurant(restaurant: any): Observable<any[]> {
    return <Observable<any[]>> this.http.post(this.uri, restaurant);
  }

  getRestaurantById(restaurantId: number): Observable<any> {
    return <Observable<any>> this.http.get(this.uri + '/' + restaurantId);
  }
}
