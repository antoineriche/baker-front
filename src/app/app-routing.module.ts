import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { CommandComponent } from './components/command/command.component';


const routes: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'restaurants', component: RestaurantComponent },
  { path: 'commands', component: CommandComponent },
  // { path: 'the-show/:artistType/:artistName', component: TheShowComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
