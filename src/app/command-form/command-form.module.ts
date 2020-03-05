import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandFormComponent } from './command-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommandFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommandFormComponent
  ]
})
export class CommandFormModule { }
