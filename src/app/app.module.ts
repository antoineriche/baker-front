import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantViewerModule } from './restaurant-viewer/restaurant-viewer.module';
import { RestaurantFormModule } from './restaurant-form/restaurant-form.module';
import { CommandFormModule } from './command-form/command-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatDialogModule } from  '@angular/material';
import { RestaurantModule } from './components/restaurant/restaurant.module';
import { CommandModule } from './components/command/command.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,

    RestaurantModule,
    CommandModule,
    
    RestaurantViewerModule,
    RestaurantFormModule,
    CommandFormModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
