import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandFormDialogComponent } from './command-form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommandFormDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CommandFormDialogComponent
  ]
})
export class CommandFormDialogModule { }
