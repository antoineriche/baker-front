import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar.component';



@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
    SnackbarComponent
  ]
})
export class SnackbarModule { }
