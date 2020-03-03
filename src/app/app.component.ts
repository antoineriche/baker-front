import { Component, OnInit } from '@angular/core';
import { CommandService } from './service/command.service';
import { RestaurantService } from './service/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'baker-project';
  commands: any[];
  restaurant: {};
  datedCommands: {};
  datedLocatedCommands: {};

  constructor(private commandService: CommandService, 
    private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.getCommands();
  }

  private getCommands() {
    this.commandService.getCommands().subscribe(
      data => this.commands = data,
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
}
