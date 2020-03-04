import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantFormComponent } from './restaurant-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RestaurantFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], 
  exports: [
    RestaurantFormComponent
  ]
})
export class RestaurantFormModule { }
