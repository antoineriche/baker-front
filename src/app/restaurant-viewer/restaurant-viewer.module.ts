import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantViewerComponent } from './restaurant-viewer.component';


@NgModule({
  declarations: [RestaurantViewerComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    RestaurantViewerComponent
  ]
})
export class RestaurantViewerModule { }
