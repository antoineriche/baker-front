import { Component, OnInit, Inject } from '@angular/core';
import { CommandService } from 'src/app/service/command.service';
import { ICommand } from 'src/app/models/command';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CommandFormDialogComponent } from './command-form-dialog/command-form-dialog.component';
import { IRestaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {

  commands: ICommand[] = [];
  restaurants: IRestaurant[] = [];
  currentDialogRef: any;

  constructor(private commandService: CommandService, 
    private restaurantService: RestaurantService,
    public dialog: MatDialog) { }

  ngOnInit() {
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
      data => {
        this.restaurants = data;
        console.log('restaurants:', this.restaurants);
      },
      err =>  console.error('error', err)
    );
  }

  saveNewCommand() {
    this.dialog.open(CommandFormDialogComponent, {
      data: { restaurants: this.restaurants },
    })
    .afterClosed().subscribe(
      (result: ICommand) => {
        if (result) {
          console.log('posting: ', result);
          this.commandService.saveCommand(result).subscribe(
            () => this.getCommands(),
            err => console.error('err', err),
            () => console.log('entonces...')
          );
        }
      }
    );
  }

  editCommand(command: ICommand) {
    this.currentDialogRef =this.dialog.open(CommandFormDialogComponent, {
      data: { command: command, restaurants: this.restaurants },
    })
    .afterClosed().subscribe(
      result => {
        if (result) {
          console.log('result: ', result);
        }
      }
    );
  }

}

