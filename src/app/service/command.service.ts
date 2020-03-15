import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICommand } from '../models/command';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  private uri = 'http://localhost:8080/baker/commands';

  constructor(private http: HttpClient) { }

  getCommands(): Observable<ICommand[]> {
    return <Observable<ICommand[]>> this.http.get(this.uri);
  }

  getCommandById(commandId: number): Observable<ICommand> {
    return <Observable<ICommand>> this.http.get(this.uri + '/' + commandId);
  }

  getCommandsByRestaurant(restaurantId: number): Observable<ICommand[]> {
    return <Observable<ICommand[]>> this.http.get(this.uri + '?restaurant=' + restaurantId);
  }

  saveCommand(command: ICommand): Observable<ICommand> {
    console.log('posting 2: ', command);
    return <Observable<ICommand>> this.http.post(this.uri, command);
  }

  getCommandsByDate(date: string): Observable<ICommand[]> {
    return <Observable<ICommand[]>> this.http.get(this.uri + '?date=' + date);
  }

  getCommandsByDateAndRestaurant(date: string, restaurantId: number): Observable<any[]> {
    return <Observable<ICommand[]>> this.http.get(this.uri + '?date=' + date + '&restaurant=' + restaurantId);
  }

  
}
