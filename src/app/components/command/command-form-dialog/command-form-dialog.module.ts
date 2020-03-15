import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandFormDialogComponent } from './command-form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [
    CommandFormDialogComponent
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
    CommandFormDialogComponent
  ]
})
export class CommandFormDialogModule { }
