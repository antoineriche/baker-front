import { Component, OnInit } from '@angular/core';
import { CommandService } from './service/command.service';
import { RestaurantService } from './service/restaurant.service';
import { ICommand } from './models/command';
import { IRestaurant } from './models/restaurant';

import { faCoffee, 
  faMusic, 
  faMicrophoneAlt, 
  faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'baker-project';
  faCoffee = faCoffee;
  faMusic = faMusic;
  faMicrophoneAlt = faMicrophoneAlt;
  faEdit = faEdit;


  commands: ICommand[] = [];
  restaurants: IRestaurant[] = [];
  restaurant: {};
  datedCommands: {};
  datedLocatedCommands: {};

  constructor(private commandService: CommandService, 
    private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.getCommands();
    this.getRestaurants();
  }

  private getCommands() {
    this.commandService.getCommands().subscribe(
      data => this.commands = data,
      err =>  console.error('error', err)
    );
  }

  private getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(
      data => this.restaurants = data,
      err =>  console.error('error', err)
    );
  }

  private getCommandsCount(restaurantId: number): number {
    return this.commands ? this.commands.filter(c => c.restaurantId == restaurantId).length : 0;
  }

  private getRestaurant(restaurantId: number) {
    this.restaurantService.getRestaurantById(restaurantId).subscribe(
      data => {
        console.log('restaurant', data);
        this.restaurant = data;
      }, 
      err => console.error('error', err)
    );
  }

  private getByDate(date: string) {
    this.commandService.getCommandsByDate(date).subscribe(
      data => this.datedCommands = {'date': date, 'commands': data}, 
      err => console.error('error', err)
    );
  }

  private getCommandsByDateAndRestaurant(date: string, restaurantId: number) {
    this.commandService.getCommandsByDateAndRestaurant(date, restaurantId).subscribe(
      data => this.datedLocatedCommands = {restaurantId: restaurantId, date: date, commands: data},
      err => console.error('error', err)
    )
  }

  postRestaurant(restaurant: any): void {
    console.log('restaurant', restaurant);
    this.restaurantService.saveRestaurant(restaurant).subscribe(
      data => console.log('response', data),
      error => console.error('error from ws', error),
      () => this.getRestaurants()
    );
  }

  postCommand(command: ICommand): void {
    console.log('command', command);
    this.commandService.saveCommand(command).subscribe(
      data => console.log('response', data),
      error => console.error('error from ws', error),
      () => this.getCommands()
    );
  }
}
