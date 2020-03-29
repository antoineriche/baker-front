import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../../models/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RestaurantFormDialogComponent } from './restaurant-form-dialog/restaurant-form-dialog.component';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { faTrashAlt, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  private readonly faTrashAlt = faTrashAlt;
  private readonly faPhone = faPhone;
  private readonly faMailBulk = faMailBulk;
  restaurantRows: IRestaurant[][] = [];
  restaurant: IRestaurant;

  constructor(private restaurantService: RestaurantService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  /* Retrieve restaurants from WS */
  private getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(
      data => this.restaurantRows = this.splitedRestaurants(data),
      err =>  console.error('error', err),
      () => console.log('completed', this.restaurantRows)
    );
  }

  /* Retrieve one restaurant*/
  private getRestaurant(restaurantId: number) {
    this.restaurantService.getRestaurantById(restaurantId).subscribe(
      data => {
        console.log('restaurant', data);
        this.restaurant = data;
      }, 
      err => console.error('error', err)
    );
  }

  saveNewRestaurant() {
    this.dialog.open(RestaurantFormDialogComponent)
    .afterClosed().subscribe(
      (result: IRestaurant) => {
        if (result) {
          this.restaurantService.saveRestaurant(result).subscribe(
            () => {
              this.openSnackBar('La commande a été créée.');
              this.getRestaurants();
            },
            err => console.error('err', err),
            () => console.log('entonces...')
          );
        }
      }
    );
  }

  editRestaurant(restaurant: IRestaurant) {
    this.dialog.open(RestaurantFormDialogComponent, {data: restaurant})
    .afterClosed().subscribe(
      (result: IRestaurant) => {
        if (result) {
          this.restaurantService.updateRestaurant(result.id, result).subscribe(
            () => {
              this.openSnackBar('La commande a été mise à jour.');
              this.getRestaurants();
            },
            err => console.error('err', err),
            () => console.log('entonces...')
          );
          console.log('result: ', result);
        }
      }
    );
  }

  deleteRestaurant(restaurant: IRestaurant) {
    this.restaurantService.deleteRestaurant(restaurant.id).subscribe(
      () => {
        this.openSnackBar('Le restaurant a été supprimé.');
        this.getRestaurants();
      },
      (err) => {
        this.openSnackBar('Erreur: ' + err.error.title);
        console.error('error:', err);
      }
    )
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

  splitedRestaurants(restaurantList: IRestaurant[]): IRestaurant[][] {
    let splited = [];
    while(restaurantList.length) {
      splited.push(restaurantList.splice(0, 3));
    }
    return splited;
  }

}
