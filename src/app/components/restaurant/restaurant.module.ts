import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantFormDialogModule } from './restaurant-form-dialog/restaurant-form-dialog.module';
import { MatButtonModule, MatChipsModule, MatListModule, MatIconModule, MatSnackBarModule, MatCardModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    RestaurantFormDialogModule,
    FontAwesomeModule
  ],
})
export class RestaurantModule { }
