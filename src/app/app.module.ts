import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantViewerModule } from './restaurant-viewer/restaurant-viewer.module';
import { RestaurantFormModule } from './restaurant-form/restaurant-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RestaurantViewerModule,
    RestaurantFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
