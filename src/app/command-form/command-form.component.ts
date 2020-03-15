import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ICommand } from '../models/command';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-command-form',
  templateUrl: './command-form.component.html',
  styleUrls: ['./command-form.component.scss']
})
export class CommandFormComponent implements OnInit {

  private commandForm: FormGroup;

  @Output()
  commandPosted = new EventEmitter<ICommand>();

  @Input()
  readonly restaurants: any[];

  constructor(private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<CommandFormComponent>) { }

  ngOnInit() {
    this.initForm();
  }

  /* Init restaurant form. */
  private initForm(): void {
    this.commandForm = this.formBuilder.group({ 
      restaurantId: new FormControl('', [Validators.required]),
      count: new FormControl(0, [Validators.required, Validators.min(1)]),
      date: new FormControl('', [Validators.required])
    });
  }

  postCommand() {
    console.log('to be posted', this.commandForm.value);
    this.dialogRef.close(this.commandForm.value);
  }

  onRestaurantSelected(event: any) {
    // this.commandForm.value['restaurantId'] = event.target.value;
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
