import { Component, OnInit, Inject } from '@angular/core';
import { CommandService } from 'src/app/service/command.service';
import { ICommand } from 'src/app/models/command';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CommandFormDialogComponent } from './command-form-dialog/command-form-dialog.component';
import { IRestaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';
import * as moment from 'moment';
import { faPause, faPlay, faStop, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {

  commands: ICommand[] = [];
  restaurants: IRestaurant[] = [];
  currentDialogRef: any;

  private readonly faTrashAlt = faTrashAlt;
  private readonly faPlay = faPlay;
  private readonly faStop = faStop;

  constructor(private commandService: CommandService, 
    private restaurantService: RestaurantService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

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
          this.commandService.saveCommand(result).subscribe(
            () => {
              this.openSnackBar('La commande a été créée.');
              this.getCommands();
            },
            err => console.error('err', err),
            () => console.log('entonces...')
          );
        }
      }
    );
  }

  deleteCommand(command: ICommand) {
    this.commandService.deleteCommand(command.id).subscribe(
      () => {
        this.openSnackBar('La commande a été supprimée.');
        this.getCommands();
      },
      (err) => this.openSnackBar('Erreur: ' + err)
    )
  }

  editCommand(command: ICommand) {
    this.currentDialogRef =this.dialog.open(CommandFormDialogComponent, {
      data: { command: command, restaurants: this.restaurants },
    })
    .afterClosed().subscribe(
      (result: ICommand) => {
        if (result) {
          this.commandService.updateCommand(result.id, result).subscribe(
            () => {
              this.openSnackBar('La commande a été mise à jour.');
              this.getCommands();
            },
            err => console.error('err', err),
            () => console.log('entonces...')
          );
          console.log('result: ', result);
        }
      }
    );
  }

  getRestaurantLabel(restaurantId: number): string {
    const restaurant = this.restaurants.find(r => r.id === restaurantId);
    return restaurant !== undefined ?
      restaurant.name : 'Restaurant id: ' + restaurantId;
  }

  openSnackBar(message: string) {
    console.log('yop');
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2 * 1000,
      data: {
        'message': message
      }
    });
  }

}

