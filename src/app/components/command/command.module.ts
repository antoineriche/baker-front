import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandComponent } from './command.component';
import { CommandFormDialogModule } from './command-form-dialog/command-form-dialog.module';



@NgModule({
  declarations: [
    CommandComponent,
  ],
  imports: [
    CommonModule,
    CommandFormDialogModule
  ]
})
export class CommandModule { }
