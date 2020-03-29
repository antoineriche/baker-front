import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { RestaurantFormDialogComponent } from './restaurant-form-dialog.component';


@NgModule({
  declarations: [
    RestaurantFormDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  entryComponents: [
    RestaurantFormDialogComponent
  ]
})
export class RestaurantFormDialogModule { }
