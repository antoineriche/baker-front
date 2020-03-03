import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  private uri = 'http://localhost:8080/baker/commands';

  constructor(private http: HttpClient) { }

  getCommands(): Observable<any[]> {
    return <Observable<any[]>> this.http.get(this.uri);
  }

  getCommandsByRestaurant(restaurantId: number): Observable<any[]> {
    return <Observable<any[]>> this.http.get(this.uri + '?restaurant=' + restaurantId);
  }

  getCommandsByDate(date: string): Observable<any[]> {
    return <Observable<any[]>> this.http.get(this.uri + '?date=' + date);
  }

  getCommandsByDateAndRestaurant(date: string, restaurantId: number): Observable<any[]> {
    return <Observable<any[]>> this.http.get(this.uri + '?date=' + date + '&restaurant=' + restaurantId);
  }

  
}
