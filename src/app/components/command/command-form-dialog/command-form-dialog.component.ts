import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IRestaurant } from 'src/app/models/restaurant';
import { ICommand } from 'src/app/models/command';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

export interface CommandFormData {
  restaurants: IRestaurant[],
  command: ICommand
}

@Component({
  selector: 'app-dialog',
  templateUrl: './command-form-dialog.component.html',
  styleUrls: ['./command-form-dialog.component.scss']
})
export class CommandFormDialogComponent implements OnInit {
  
  private commandForm: FormGroup;
  command: ICommand;
  restaurants: IRestaurant[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: CommandFormData, 
    public dialogRef: MatDialogRef<CommandFormDialogComponent>,
    private formBuilder: FormBuilder) {
    if (data) {
      if (data.command) {
        this.command = data.command;
      }

      if (data.restaurants) {
        this.restaurants = data.restaurants;
      }
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

/* Init restaurant form. */
private initForm(): void {
  this.commandForm = this.formBuilder.group({ 
    id: new FormControl(this.command ? this.command.id : null),
    restaurantId: new FormControl(this.command ? this.command.restaurantId : '', [Validators.required]),
    count: new FormControl(this.command ? this.command.count : 0, [Validators.required, Validators.min(1)]),
    date: new FormControl(this.command ? this.command.date : '', [Validators.required])
  });
}

  public isAnUpdate(): boolean {
    return this.command !== undefined && this.command !== null;
  }

  public isACreation(): boolean {
    return !this.isAnUpdate();
  }

  cancel() {
    this.dialogRef.close();
  }

  postCommand() {
    this.dialogRef.close(this.commandForm.value);
  }
}
